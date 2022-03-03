# Simple C++ Computer Vision in the browser

This repo shows how to compile your C++ Computer vision program effortlessly to run in the browser. 
Compared with [OpenCV.js](https://docs.opencv.org/4.5.5/df/d0a/tutorial_js_intro.html), this 
approach allows you to: 
- **No re-writing**: C++ code can be used directly with a small interface
- **Reduced WebAssembly size**: static linking drops all unused OpenCV function
- **Optimal performance**: Your C++ code is compiled together with OpenCV code. 

### Install and compile

First you have to download and install [Emscripten](https://emscripten.org/docs/getting_started/downloads.html). 
We will call the directory YOUR_EMSCRIPTEN_DIR, in my case it is `/home/iago/software/emsdk`.

Next we should compile OpenCV for JavaScrpt:

```shell
git clone git@github.com:opencv/opencv.git --depth 1
cd opencv/platforms/js
python build_js.py --emscripten_dir=YOUR_EMSCRIPTEN_DIR/upstream/emscripten/ --build_wasm ./build
```

If this works well you should have the Cmake configuration files ready in `opencv/platforms/js/build/install/lib/cmake/opencv4`:
```
iago@iago-laptop:~/software/opencv/platforms/js$ ls build/install/lib/cmake/opencv4/
OpenCVConfig.cmake  OpenCVConfig-version.cmake  OpenCVModules.cmake  OpenCVModules-release.cmake
```

Now you are ready to compile a CMake project with Emscripten+OpenCV:
```shell
cmake .. \
-DCMAKE_TOOLCHAIN_FILE=YOUR_EMSCRIPTEN_DIR/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake \
-DOpenCV_DIR=opencv/opencv-4.5.4/platforms/js/build/install/lib/cmake/opencv4
make VERBOSE=1
```

This will generate two important files:
- `build/elsed_js.wasm`: Contains the compiled C++ code. Your code and all the necessary OpenCV function are included.
- `build/elsed_js.js`:Contains runtime support to load and execute the .wasm file.

### Usage

Now the only thing that you need to do is to import it from HTML and/or Javascript:

```html
<script src="/build/elsed_js.js"></script>
<script>
    Module['onRuntimeInitialized'] = () => {
        console.log("--> Emscripten ready")
        Elsed = {
            version: Module.cwrap('version', 'number', []),
            ...
        };
        console.log("Emscripten ELSED Wrapper version: " + Elsed.version());
    } // Emscripten modules take a bit longer to load
</script>
```
