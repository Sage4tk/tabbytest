import tabbyClient from "./tabby"
import { PaymentRequest } from "tabby-web-sdk"

export default function App() {

    const createSesh = async () => {
        const succesPayload:PaymentRequest = {
            payment: {
                amount: "500.00",
                currency: "AED",
                buyer: {
                    email: "card.success@tabby.ai",
                    name: "Tabby Card",
                    phone: "+971500000001"
                },
                buyer_history: {
                    registered_since: new Date().toISOString(),
                    loyalty_level: 0
                },
                shipping_address: {
                    address: "Block 13, Silicon Oasis",
                    city: "Dubai",
                    zip: "00000"
                },
                order: {
                    reference_id: "b317f738-5d3d-4f41-8ff1-5b6677432b85",
                    items: [

                    ]
                },
                order_history: []
            },
            lang: "en",  // Selection between english or arabic (defaulted as english)
            merchant_urls: {
                success: "https://example.com/success",
                cancel: "https://example.com/cancel",
                failure: "https://example.com/failure"
            }, // handle redirect
        }
        const data = await tabbyClient.createSession(succesPayload); 

        console.log(data);
    }



    return (
        <div>
            <button onClick={createSesh}>TEST</button>
        </div>
    )
}