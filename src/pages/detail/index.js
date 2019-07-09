import React from 'react'
import connect from '../../common/connect'
import * as Actions from './action'
import Header from '../../components/Header'
@connect(state => ({...state}), {...Actions})
export default class Detail extends React.Component {
    render(h) {
        return (
            <div>
                Detail
            </div>

        )
    }
}