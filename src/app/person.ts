export class Person {

    name: string;
    mobile: number;
    age: number;
    address: string;

    getName() {
      return this.name;
    }
    setName(name: string) {
      this.name = name;
    }

    getMobile() {
      return this.mobile;
    }
    setMobile(mobile: number) {
      this.mobile = mobile;
    }

    getAge() {
      return this.age;
    }
    setAge(age: number) {
      this.age = age;
    }

    getAddress() {
      return this.address;
    }
    setAddress(address: string) {
      this.address = address;
    }
}
