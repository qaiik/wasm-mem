class MemoryReader {
  constructor(mem) {
    this.mem = mem;
  }
  
  Write(ptr, value, type="i32") {
    if (type !== "str") {
      let bytes = new ByteTypes[type](this.mem.buffer, ptr)
      bytes[0] = value
    }
    
  
    let bytes = new ByteTypes[type](this.mem.buffer, ptr)
    for (let i = 0; i < value.length; i++) {
      bytes[i] = new TextEncoder("utf-8").encode(value[i])
    }
  }
  
}
