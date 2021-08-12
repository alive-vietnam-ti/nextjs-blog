import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../assets/css/common.scss';

// export interface MyAppState {
// }

// class MyApp extends React.Component<AppProps, MyAppState> {
//   constructor(props: AppProps) {
//     super(props);
//   }
//   render() {
//     return (
//       <div id="" className="root-app">
//         <Head>
//           <title>Global title</title>
//         </Head>
//         <this.props.Component {...this.props.pageProps} />
//       </div>
//     );
//   }
// }

// export default MyApp;

const CustomAppFC: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div id="" className="root-app">
      <Head>
        <title>Global title</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default CustomAppFC;

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <div id="" className="root-app">
//       <Head>
//         <title>{pageProps.title || 'Global title'}</title>
//       </Head>
//       <Component {...pageProps} />
//     </div>
//   )
// }