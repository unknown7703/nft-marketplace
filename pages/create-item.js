import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
    nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    const router = useRouter()

    async function onChange(e) {
        const file = e.target.files[0]
        try {
            const added = await client.add(
                file,
                {
                    progress: (prog) => console.log('recieved: ${prog}')
                }
            )
            const url = 'https://ipfs.infura.io/ipfs/${added.path}'
            setFileUrl(url)

        } catch (e) {
            console.log(e)
        }
    }

    async function createItem() {
        const { name, description, price } = formInput
        if (!name || !description || !price || !fileUrl) return
        const data = JSON.stringify({
            name, description, image: fileUrl
        })

        try {
            const added = await client.add(data)
            const url = 'https://ipfs.infura.io/ipfs/${added.path}'

            createSale(url)
        } catch (error) {
            console.log('Error uploading file: ', error)
        }
    }

    async function createSale() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
        let transaction = await contract.createToken(url)
        let tx = await transaction.wait()

        let event = tx.event[0]
        let value = event.args[2]
        let tokenId = value.toNumber()

        const price = ethers.utils.parseUnits(formInput.price, 'ether')

        contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        let listingPrice = await contract.getListingPrice()
        listin
    }

return (

    <div className="flex justify-center ">
        <div className="w-1/2 flex flex-col pb-12  drop-shadow-md">
            <input
                placeholder="Asset Name"
                className="mt-8 border rounded p-4"
                onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
            />
            <textarea
                placeholder="Asset Description"
                className="mt-2 border rounded p-4"
                onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
            />
            <input
                placeholder="Asset Price in Eth"
                className="mt-2 border rounded p-4"
                onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
            />
            <input
                type="file"
                name="Asset"
                className="my-4"
                onChange={onChange}
            />
            {
                fileUrl && (
                    <img className="rounded mt-4" width="350" src={fileUrl} />
                )
            }
            <button onClick={createSale} className="font-bold mt-4 bg-blue-600 text-white rounded p-4 shadow-lg">
                Create NFT
            </button>
        </div>
    </div>
)
}

//<form>
{/* <label class="block">
<span class="block text-sm font-medium text-slate-700">Username</span>
<!-- Using form state modifers, the classes can be identical for every input -->
<input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"/>
</label>
<!-- ... -->
</form> */}





































