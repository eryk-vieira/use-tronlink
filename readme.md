# use-tronlink

<p align="center">
<img src="https://img.shields.io/npm/v/typescript?color=orange&label=TypeScript&logo=Typescript&logoColor=blue&style=for-the-badge">
<img src="https://img.shields.io/npm/v/react?color=orange&label=React&logo=React&logoColor=Blue&style=for-the-badge"/>
<img src="https://img.shields.io/npm/l/1?color=orange&logo=License&logoColor=purple&style=for-the-badge"/>
</p>

<p align="center">
  A Simple React hook that connects with Tronlink wallet extension :memo:
</p>

<hr>

### :building_construction: Installation

```bash
  # Install using yarn
  yarn add use-tronlink
  
  # Install using npm
  npm install use-tronlink
```

### :technologist: Usage

use-tronlink is a simple hook just like other ones, follow the example above to use it.

```tsx
import { useTronlink } from 'use-tronlink';


const MyComponent = () => {
  const { 
    address, // The connected wallet address
    walletName, // The wallet name
    trxBalance, // The wallet TRX balance
    isConnected, // A boolean checking it is connected or not
 } = useTronlink();


  return (
    ...
  )
}
```

## :closed_book: License

<p align="center">Released in 2022. This project is under the<a href="https://github.com/Eryk-Luiz/use-tronlink/blob/master/LICENSE"> MIT license</a> 🚀</p>

<p align="center"> Made with love by <a href="https://github.com/Eryk-Luiz">Eryk Luiz</a> 🚀</p>
