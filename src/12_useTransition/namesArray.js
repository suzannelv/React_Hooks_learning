import { faker } from "@faker-js/faker";

const namesArray = [];
for (let i = 0; i < 1000; i++) {
    namesArray.push(faker.name.fullName());
}

console.log(namesArray);
export default namesArray;
