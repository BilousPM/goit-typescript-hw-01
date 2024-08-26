function merge<T extends object, Y extends object>(objA: T, objB: Y): object {
  return Object.assign(objA, objB);
}
console.log(merge({ fred: "rr" }, {}));
