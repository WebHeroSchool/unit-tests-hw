const bool = 1

const promise = new Promise((resolve, reject) => {
	if(bool) {
		const timeOut = setTimeout(() => resolve('foo'), 1000)
	} else {
		const reason = new Error('important error')
		reject(reason)
	}
})

console.log(promise)

promise
	.then((fulfilled) => console.log(fulfilled))
	.catch((error) => console.log(error.message))