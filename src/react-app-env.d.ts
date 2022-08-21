/// <reference types="react-scripts" />
declare module 'react-dom/client' {
	// typing module default export as `any` will allow you to access its members without compiler warning
	// eslint-disable-next-line import/no-mutable-exports
	let createRoot: any
	// eslint-disable-next-line import/prefer-default-export
	export { createRoot }
}
