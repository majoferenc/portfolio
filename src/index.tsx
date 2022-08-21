import React, { Suspense } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.scss'
import App from './pages/app/App'
import { store } from './app/store'
import * as serviceWorker from './serviceWorker'
import './i18n'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback='loading'>
				<App />
			</Suspense>
		</Provider>
	</React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
