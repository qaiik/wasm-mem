class MemoryReader {
  constructor(mem) {
    this.mem = mem;
  }
  
  read(ptr, type="i32", strlen=false) {
    if (type !== "str") {
      let bytes = new ByteTypes[type](this.mem.buffer, ptr)
      return bytes[0]
    }
    
    if (!strlen) {
      let bytes = new ByteTypes[type](this.mem.buffer, ptr)
      let strI = 0;
    
      while(bytes[strI] !== 0) {
        strI++
      }
    
      return new TextDecoder("utf-8").decode(bytes.slice(0, strI))
    }
    
  
    let bytes = new ByteTypes[type](this.mem.buffer, ptr)
    return new TextDecoder("utf-8").decode(bytes.slice(0, strlen))
  }
  
  searchEQ(type, value, start=0x00, end=this.mem.buffer.byteSize) {
    let matches = [];
    for (let i = start; i < end; i++) {
      let v = read(i, type) 
      if (v == value) {
        matches.push([i, value])
      }
    }
  }
}
