function loadImageToCanvas(url, cavansId) {
    return new Promise((resolve, reject) => {
        let canvas = document.getElementById(cavansId);
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.crossOrigin = 'anonymous';
        img.addEventListener('load', () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            resolve(img);
        });
        img.addEventListener('error', (err) => reject(err));
        img.src = url;
    });
}

function addFileInputHandler(fileInputId, canvasId) {
    let inputElement = document.getElementById(fileInputId);
    inputElement.addEventListener('change', (e) => {
        let files = e.target.files;
        if (files.length > 0) {
            let imgUrl = URL.createObjectURL(files[0]);
            loadImageToCanvas(imgUrl, canvasId).then(process_image);
        }
    }, false);
}

function getImgData(canvas_id) {
    const canvas = document.getElementById(canvas_id)
    const ctx = canvas.getContext("2d")
    return ctx.getImageData(0, 0, canvas.width, canvas.height)
}

let Elsed;

function load_emscripten() {
    return new Promise(resolve => {
        Module['onRuntimeInitialized'] = () => {
            console.log("--> Emscripten ready")
            Elsed = {
                version: Module.cwrap('version', 'string', []),
                create_buffer: Module.cwrap('create_buffer', 'number', ['number', 'number']),
                destroy_buffer: Module.cwrap('destroy_buffer', '', ['number']),
                process_frame: Module.cwrap('process_frame', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number']),
            };
            console.log("Emscripten ELSED Wrapper version: " + Elsed.version());
            resolve()
        } // Emscripten modules take a bit to load
    })
}

function process_image() {
    // Get image data from input canvas
    const image = getImgData('canvasInput')

    // Allocate a C++ memory buffer to store an image of size w x h
    const p = Elsed.create_buffer(image.width, image.height);
    // Copy te value of the input image to the buffer
    Module.HEAP8.set(image.data, p);

    const gradTh = parseInt($('#GradientThInput').val())
    const valTh = parseFloat($('#ValidationThInput').val())
    const jumpSize = parseInt($('#JumpSizeInput').val())
    const nJumpChecks = parseInt($('#nSegmentsInput').val())

    // Process frame with C++ code
    const pResults = Elsed.process_frame(p, image.width, image.height, gradTh, valTh, jumpSize, nJumpChecks);

    // pResults is a buffer containing an image of input size. Convert it to Javascript classes
    const resultView = new Uint8Array(Module.HEAP8.buffer, pResults, image.data.length);
    const result = Uint8ClampedArray.from(resultView);
    // Free dynamic memory allocated by C++
    Elsed.destroy_buffer(pResults);
    Elsed.destroy_buffer(p);

    // Draw the resulting image in the output canvas
    const canvas = document.getElementById('canvasOutput')
    const ctx = canvas.getContext("2d")
    ctx.canvas.width = image.width
    ctx.canvas.height = image.height
    const resultingImage = new ImageData(result, image.width, image.height);
    ctx.putImageData(resultingImage, 0, 0);
}

$(document).ready(() => {

    const image_loaded = loadImageToCanvas('00051240.jpg', 'canvasInput');
    addFileInputHandler('fileInput', 'canvasInput');

    const emscripten_loaded = load_emscripten()

    Promise.all([image_loaded, emscripten_loaded]).then(process_image)

    $('.range-selector').on('input', (e) => {
        e.currentTarget.nextElementSibling.value = e.currentTarget.value
        process_image()
    })
})