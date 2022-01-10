cmake_minimum_required(VERSION 3.10)
project(elsed_js)

find_package(OpenCV)
message(STATUS "OpenCV_FOUND: ${OpenCV_FOUND}")
message(STATUS "OpenCV_VERSION: ${OPENCV_VERSION}")
message(STATUS "OpenCV_INCLUDE_DIRS: " ${OpenCV_INCLUDE_DIRS})
message(STATUS "OpenCV_LIBS: " ${OpenCV_LIBS})
include_directories(${OpenCV_INCLUDE_DIRS})

set(CMAKE_CXX_STANDARD 14)

if (EMSCRIPTEN)
    SET(CMAKE_CXX_FLAGS "-s EXPORTED_RUNTIME_METHODS=['cwrap'] -s TOTAL_MEMORY=128MB")
    set(CMAKE_EXECUTABLE_SUFFIX .js)
endif ()

# Download ELSED here if you want to compile the code
# git clone git@github.com:iago-suarez/ELSED.git
include_directories(ELSED/src)
add_executable(elsed_js
        ELSED/src/EdgeDrawer.cpp ELSED/src/ELSED.cpp ELSED/src/FullSegmentInfo.cpp
        main.cpp)

target_link_libraries(elsed_js ${OpenCV_LIBS})

if (EMSCRIPTEN)
    # Copy files to /js/ directory
    add_custom_command(
            TARGET ${PROJECT_NAME} POST_BUILD
            COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_CURRENT_BINARY_DIR}/elsed_js.js
            ${CMAKE_SOURCE_DIR}/js/elsed_js.js
            COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_CURRENT_BINARY_DIR}/elsed_js.wasm
            ${CMAKE_SOURCE_DIR}/js/elsed_js.wasm)
endif ()
