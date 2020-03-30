import React, {useState} from 'react'
import './style.css'
import {Button} from 'reactstrap'

function Binary(){

    // constructor(props){
    //     super(props)
    //     this.state ={ 
    //         binary: 0
    //     }
    // }

    const [x1, setX1] = useState('0')
    const [x2, setX2] = useState('0')
    const [x3, setX3] = useState('0')
    const [x4, setX4] = useState('0')
    const [x5, setX5] = useState('0')
    const [x6, setX6] = useState('0')
    const [x7, setX7] = useState('0')
    const [x8, setX8] = useState('0')
    

    let y = (x8 * 1) + (x7 * 2) + (x6 * 4) + (x5 * 8) + (x4 * 16) + (x3 * 32) + (x2 * 64) + ( x1 * 128)

    let onOf = {
        by: [0, 1], 
        name: ['off', 'on'],
        color: ['danger', 'success'] 
    }

    function change(x){
        if(x === 0){
            return 1
        }else{
            return 0
        }
    }

    return(
        
        <div className="container-fluid page" color="primary">
            <h1 className="title">bin2dec</h1>        
            <div className="container justify-content-center align-content-center box">
                <div className="row">
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x1]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x1]} onClick={() => setX1(change(x1))}>
                                {onOf.name[x1]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x2]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x2]} onClick={() => setX2(change(x2))}>
                                {onOf.name[x2]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x3]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x3]} onClick={() => setX3(change(x3))}>
                                {onOf.name[x3]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x4]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x4]} onClick={() => setX4(change(x4))}>
                                {onOf.name[x4]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x5]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x5]} onClick={() => setX5(change(x5))}>
                                {onOf.name[x5]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x6]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x6]} onClick={() => setX6(change(x6))}>
                                {onOf.name[x6]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x7]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x7]} onClick={() => setX7(change(x7))}>
                                {onOf.name[x7]}
                            </Button>
                        </div>
                    </div>
                    <div className="col-1 box-by ml-3 mt-5">
                        <div className="binary mx-2 mt-4">
                            {onOf.by[x8]}
                        </div>
                        <div className="bOnOf">
                            <Button size='lg' color={onOf.color[x8]} onClick={() => setX8(change(x8))}>
                                {onOf.name[x8]}
                            </Button>
                        </div>
                    </div>

                    <div className="col-2 align-content-center results">
                        <h2>{y}</h2>
                    </div>
                </div>       
            </div>
        </div>
        
    )

}

export default Binary