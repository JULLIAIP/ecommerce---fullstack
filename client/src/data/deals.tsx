import { faker } from "@faker-js/faker"
import { DEALTYPES, Deal, URGENCIA } from "../types/Tdeals"


faker.locale = 'pt_BR'
export const deals: Deal[] = []


for (let i = 0; i < 12; i++) {
    const deal: Deal = {
        type: DEALTYPES.Venda,
        value: Number(faker.commerce.price()),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        location: {
            lat: Number(`${faker.address.latitude()}, ${i}`),
            lng: Number(`${faker.address.longitude()}, ${i}`),
            address: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip_code: Number(faker.address.zipCode)
        },
        urgency: {
            type: URGENCIA.Baixa,
            limit_date: faker.date.past().toString()
        },
        photos: [
            { src: faker.image.image() },
            { src: faker.image.image() }
        ]
    }
    deals.push(deal)
}