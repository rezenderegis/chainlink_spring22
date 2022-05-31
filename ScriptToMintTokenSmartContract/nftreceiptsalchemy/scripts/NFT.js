const sendJSONtoPinata = require("./sendJSONtoPinata");
const sendHashtotMint = require("./startMinting");

//Example of JSON generated after a transaction from shopify
const JSONTransaction = {"order":{"id":4739692560597,"admin_graphql_api_id":"gid:\/\/shopify\/Order\/4739692560597","app_id":580111,"browser_ip":"76.90.38.107","buyer_accepts_marketing":false,"cancel_reason":null,"cancelled_at":null,"cart_token":"25b840b203f6a6c5146986ef994397fe","checkout_id":32650160308437,"checkout_token":"7f4935c251cacfa69ecb698c94cf3eab","client_details":{"accept_language":"en-US,en;q=0.9","browser_height":739,"browser_ip":"76.90.38.107","browser_width":1440,"session_hash":null,"user_agent":"Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/100.0.4896.127 Safari\/537.36"},"closed_at":"2022-05-07T12:46:26-07:00","confirmed":true,"contact_email":"test@houseofquorum.com","created_at":"2022-05-07T09:49:03-07:00","currency":"USD","current_subtotal_price":"89999.00","current_subtotal_price_set":{"shop_money":{"amount":"89999.00","currency_code":"USD"},"presentment_money":{"amount":"89999.00","currency_code":"USD"}},"current_total_discounts":"0.00","current_total_discounts_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"current_total_duties_set":null,"current_total_price":"96523.93","current_total_price_set":{"shop_money":{"amount":"96523.93","currency_code":"USD"},"presentment_money":{"amount":"96523.93","currency_code":"USD"}},"current_total_tax":"6524.93","current_total_tax_set":{"shop_money":{"amount":"6524.93","currency_code":"USD"},"presentment_money":{"amount":"6524.93","currency_code":"USD"}},"customer_locale":"en-US","device_id":null,"discount_codes":[],"email":"test@houseofquorum.com","estimated_taxes":false,"financial_status":"paid","fulfillment_status":"fulfilled","gateway":"bogus","landing_site":"\/password","landing_site_ref":null,"location_id":null,"name":"#1001","note":null,"note_attributes":[],"number":1,"order_number":1001,"order_status_url":"https:\/\/blockreceipts.myshopify.com\/64230392021\/orders\/5f644c6b0ba9235a2647b7a268c7fa04\/authenticate?key=a4c13b24d4e5b774d5748296288eb749","original_total_duties_set":null,"payment_gateway_names":["bogus"],"phone":null,"presentment_currency":"USD","processed_at":"2022-05-07T09:49:02-07:00","processing_method":"direct","reference":null,"referring_site":"","source_identifier":null,"source_name":"web","source_url":null,"subtotal_price":"89999.00","subtotal_price_set":{"shop_money":{"amount":"89999.00","currency_code":"USD"},"presentment_money":{"amount":"89999.00","currency_code":"USD"}},"tags":"","tax_lines":[{"price":"6524.93","rate":0.0725,"title":"California State Tax","price_set":{"shop_money":{"amount":"6524.93","currency_code":"USD"},"presentment_money":{"amount":"6524.93","currency_code":"USD"}},"channel_liable":false}],"taxes_included":false,"test":true,"token":"5f644c6b0ba9235a2647b7a268c7fa04","total_discounts":"0.00","total_discounts_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"total_line_items_price":"89999.00","total_line_items_price_set":{"shop_money":{"amount":"89999.00","currency_code":"USD"},"presentment_money":{"amount":"89999.00","currency_code":"USD"}},"total_outstanding":"0.00","total_price":"96523.93","total_price_set":{"shop_money":{"amount":"96523.93","currency_code":"USD"},"presentment_money":{"amount":"96523.93","currency_code":"USD"}},"total_price_usd":"96523.93","total_shipping_price_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"total_tax":"6524.93","total_tax_set":{"shop_money":{"amount":"6524.93","currency_code":"USD"},"presentment_money":{"amount":"6524.93","currency_code":"USD"}},"total_tip_received":"0.00","total_weight":1302263,"updated_at":"2022-05-07T12:46:26-07:00","user_id":null,"billing_address":{"first_name":"Jon","address1":"1234 Kings Landing","phone":null,"city":"The Wall","zip":"92342","province":"California","country":"United States","last_name":"Snow","address2":"","company":null,"latitude":34.7612737,"longitude":-117.3381427,"name":"Jon Snow","country_code":"US","province_code":"CA"},"customer":{"id":6203370438869,"email":"test@houseofquorum.com","accepts_marketing":false,"created_at":"2022-05-07T09:47:10-07:00","updated_at":"2022-05-07T09:49:03-07:00","first_name":"Jon","last_name":"Snow","orders_count":0,"state":"disabled","total_spent":"0.00","last_order_id":null,"note":null,"verified_email":true,"multipass_identifier":null,"tax_exempt":false,"phone":null,"tags":"","last_order_name":null,"currency":"USD","accepts_marketing_updated_at":"2022-05-07T09:47:10-07:00","marketing_opt_in_level":null,"email_marketing_consent":{"state":"not_subscribed","opt_in_level":"single_opt_in","consent_updated_at":null},"sms_marketing_consent":null,"admin_graphql_api_id":"gid:\/\/shopify\/Customer\/6203370438869","default_address":{"id":7674296303829,"customer_id":6203370438869,"first_name":"Jon","last_name":"Snow","company":null,"address1":"1234 Kings Landing","address2":"","city":"The Wall","province":"California","country":"United States","zip":"92342","phone":null,"name":"Jon Snow","province_code":"CA","country_code":"US","country_name":"United States","default":true}},"discount_applications":[],"fulfillments":[{"id":4238298251477,"admin_graphql_api_id":"gid:\/\/shopify\/Fulfillment\/4238298251477","created_at":"2022-05-07T12:46:25-07:00","location_id":69013635285,"name":"#1001.1","order_id":4739692560597,"origin_address":{},"receipt":{},"service":"manual","shipment_status":null,"status":"success","tracking_company":null,"tracking_number":null,"tracking_numbers":[],"tracking_url":null,"tracking_urls":[],"updated_at":"2022-05-07T12:46:25-07:00","line_items":[{"id":12117543452885,"admin_graphql_api_id":"gid:\/\/shopify\/LineItem\/12117543452885","fulfillable_quantity":0,"fulfillment_service":"manual","fulfillment_status":"fulfilled","gift_card":false,"grams":1302264,"name":"2017 Porsche 911 - Blue \/ Sports","origin_location":{"id":3467777507541,"country_code":"US","province_code":"CA","name":"blockreceipts","address1":"1876 Fir St.","address2":"","city":"Corona","zip":"92882"},"price":"89999.00","price_set":{"shop_money":{"amount":"89999.00","currency_code":"USD"},"presentment_money":{"amount":"89999.00","currency_code":"USD"}},"product_exists":true,"product_id":7696781213909,"properties":[],"quantity":1,"requires_shipping":true,"sku":"2017Porsche911","taxable":true,"title":"2017 Porsche 911","total_discount":"0.00","total_discount_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"variant_id":43033301942485,"variant_inventory_management":"shopify","variant_title":"Blue \/ Sports","vendor":"blockreceipts","tax_lines":[{"channel_liable":false,"price":"6524.93","price_set":{"shop_money":{"amount":"6524.93","currency_code":"USD"},"presentment_money":{"amount":"6524.93","currency_code":"USD"}},"rate":0.0725,"title":"California State Tax"}],"duties":[],"discount_allocations":[]}]}],"line_items":[{"id":12117543452885,"admin_graphql_api_id":"gid:\/\/shopify\/LineItem\/12117543452885","fulfillable_quantity":0,"fulfillment_service":"manual","fulfillment_status":"fulfilled","gift_card":false,"grams":1302264,"name":"2017 Porsche 911 - Blue \/ Sports","origin_location":{"id":3467777507541,"country_code":"US","province_code":"CA","name":"blockreceipts","address1":"1876 Fir St.","address2":"","city":"Corona","zip":"92882"},"price":"89999.00","price_set":{"shop_money":{"amount":"89999.00","currency_code":"USD"},"presentment_money":{"amount":"89999.00","currency_code":"USD"}},"product_exists":true,"product_id":7696781213909,"properties":[],"quantity":1,"requires_shipping":true,"sku":"2017Porsche911","taxable":true,"title":"2017 Porsche 911","total_discount":"0.00","total_discount_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"variant_id":43033301942485,"variant_inventory_management":"shopify","variant_title":"Blue \/ Sports","vendor":"blockreceipts","tax_lines":[{"channel_liable":false,"price":"6524.93","price_set":{"shop_money":{"amount":"6524.93","currency_code":"USD"},"presentment_money":{"amount":"6524.93","currency_code":"USD"}},"rate":0.0725,"title":"California State Tax"}],"duties":[],"discount_allocations":[]}],"payment_details":{"credit_card_bin":"1","avs_result_code":null,"cvv_result_code":null,"credit_card_number":"•••• •••• •••• 1","credit_card_company":"Bogus"},"payment_terms":null,"refunds":[],"shipping_address":{"first_name":"Jon","address1":"1234 Kings Landing","phone":null,"city":"The Wall","zip":"92342","province":"California","country":"United States","last_name":"Snow","address2":"","company":null,"latitude":34.7612737,"longitude":-117.3381427,"name":"Jon Snow","country_code":"US","province_code":"CA"},"shipping_lines":[{"id":3946155802837,"carrier_identifier":null,"code":"Economy","delivery_category":null,"discounted_price":"0.00","discounted_price_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"phone":null,"price":"0.00","price_set":{"shop_money":{"amount":"0.00","currency_code":"USD"},"presentment_money":{"amount":"0.00","currency_code":"USD"}},"requested_fulfillment_service_id":null,"source":"shopify","title":"Economy","tax_lines":[],"discount_allocations":[]}]}}

//Wallet Address which it will be transfered the NFT
const walletAddress = "0x328DA7627A9c7C7574cEd0d3e85a7F6e6d6389A0";

const mTime = Date.now();
const mName = mTime + "-" + "test";
let mURI = null;

//For now we will use a harcoded image, but this part can be dinamycally - just adding this for the MVP
const mJSON = {
    pinataMetadata: {
        name: mName
    },
    pinataContent: {
        "description" : "Block Receipts - Team: David, Fabricio & Antonio", 
        "image" : "https://gateway.pinata.cloud/ipfs/QmRoVerJ4WMizkMeUPQixbxhYUUvs3jgGVTARyC3rnwmQV", 
        "name" : "BLOCK-RCPT",
        "data" : JSONTransaction
    }
}

exports.doProcess = async (mJSON, walletAddress) => {
    try {
        const respHasthFromIPFS = await sendJSONtoPinata.pinJSONToIPFS(mJSON);

        if (respHasthFromIPFS.IpfsHash) {
            console.log(respHasthFromIPFS.IpfsHash);
            mURI = `https://gateway.pinata.cloud/ipfs/${respHasthFromIPFS.IpfsHash}`
        } else {
            console.log("There was an error pinning the JSON to IPFS");
        }

       await sendHashtotMint.startMinting(walletAddress, mURI);

    } catch (err) {
        console.log("[NFT][respHasthFromIPFS]---< " + err)
    }
}

//Executing the script manually for testing purposes, but this function could be executed in a webhook of shopify to mint the NFT
exports.doProcess(mJSON, walletAddress);