import React, { useState, useEffect } from 'react'
import Modal from '../../components/UI/Modal/Modal'
// import axios from 'axios'

// axios.interceptors.response.eject()


const withErrorHandler = (WrappedComponent, axios) => {

    return (props) => {

        const [Error, setError] = useState(null)

        useEffect(() => {
            const req_ic = axios.interceptors.request.use(req => {
                setError(null)
                return req
            })
            const res_ic = axios.interceptors.response.use(res => res, (error) => {
                setError(error)
                console.log(error)
            })

            return () => {
                console.log('Unmounted interceptors: ', req_ic, res_ic)
                axios.interceptors.request.eject(req_ic)
                axios.interceptors.response.eject(res_ic)
            }
        }, [])
        
        return (
            <React.Fragment>
                <Modal 
                    show={Error}
                    backdropClicked={() => setError(null)}>
                        <p>Something went wrong</p>
                        {Error ? Error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </React.Fragment>
        )
    }
}

export default withErrorHandler