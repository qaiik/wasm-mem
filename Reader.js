class MemoryReader {
  constructor(mem) {
    this.mem = mem;
  }
  
  read(ptr, type="i32") {
    let bytes = new ByteTypes[type](this.mem, ptr)
  }
}
