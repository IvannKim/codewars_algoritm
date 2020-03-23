/*
Snapshot 클래스의 구현을 수정하여 스냅 샷에 저장된
배열이 원래 또는 복원 된 어레이를 수정하여 영향을 받지 않도록하십시오.
*/
class Snapshot {
  constructor(array) {
    this.array = [...array];
  }
  restore() {
    return [...this.array];
  }
}
var array = [1, 2];
var snap = new Snapshot(array);

array[0] = 3;
array = snap.restore(); //[1, 2]
console.log(array.join()); //It should log "1,2"

array.push(4);
array = snap.restore();
console.log(array.join()); //It should log "1,2"
