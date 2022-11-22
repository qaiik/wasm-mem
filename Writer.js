class MemoryWriter {
  constructor(mem) {
    this.mem = mem;
  }
  
  Write(ptr, value, type="i32", originalLength=false) {
    if (type !== "str") {
      let bytes = new ByteTypes[type](this.mem.buffer, ptr)
      bytes[0] = value
    }
    
  
    let bytes = new ByteTypes[type](this.mem.buffer, ptr)
    for (let i = 0; i < value.length; i++) {
      bytes[i] = new TextEncoder("utf-8").encode(value[i])
    }
    
    if (extra) {
      for (let i = 0; i < originalLength - value.length; i++) {
        bytes[value.length + i] = "\x00" 
      }
    }
  }
  
}
