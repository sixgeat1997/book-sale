import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { saleActions } from '../redux/actions'

const Sale = () => {

    const allAction = bindActionCreators(saleActions,useDispatch())
    const bookForm = useSelector(state => state.bookForm)

    console.log(bookForm);
    

    return (
        <div>
            <form>
                <label>ชื่อหนังสือ : </label>
                <input onChange={(e)=> allAction.chgBname(e.target.value)}></input><br />
                <label>ชื่อผู้เขียน : </label>
                <input onChange={(e)=> allAction.chgBWname(e.target.value)}></input><br />
                <label>ราคา : </label>
                <input type="number" onChange={(e)=> allAction.chgBprice(e.target.value)}></input> <br />
                <label>เบอร์โทรติดต่อ : </label>
                <input onChange={(e)=> allAction.chgBtel(e.target.value)}></input> <br />
                <label>อัพโหลดรูป : </label>
                <input onChange={(e)=> allAction.chgBimg(e.target.value)} type="file" ></input>
                
                
                <hr />
                <button>ขายสินค้า</button>

            </form>
        </div>
    )
}

export default Sale