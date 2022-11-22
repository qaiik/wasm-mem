let _is = WebAssembly.instantiateStreaming.bind(window)
let _i = WebAssembly.instantiate.bind(window);

WebAssembly.instantiateStreaming = function(asm, body) {
  let _mem = new WebAssembly.Memory({
    initial: 256
  })

  window.dispatchEvent(new CustomEvent(
    "wasmmem", {
      detail: {
        memory: _mem
      }
    }
  ))
  if (body.js) {
    body.js = {
      mem: _mem
    }
  } else {
    body.js.mem = _mem
  }

  return _is(asm, body)
}

WebAssembly.instantiate = function(asm, body) {
  let _mem = new WebAssembly.Memory({
    initial: 256
  })

  window.dispatchEvent(new CustomEvent(
    "wasmmem", {
      detail: {
        memory: _mem
      }
    }
  ))
  if (body.js) {
    body.js = {
      mem: _mem
    }
  } else {
    body.js.mem = _mem
  }

  return _i(asm, body)
}
