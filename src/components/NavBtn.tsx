import React from 'react';

const NavBtn = (name:string, onClickFunc: () => void, visible:boolean, iconName:string, btnType: string, fontSize:string) => {
    if(visible == true)
    {
        return (
            <div>
                <button 
                    className={`${btnType} my-sidebar-btn`}
                    onClick={() => onClickFunc()}
                >
                    <i className={iconName} style={{fontSize: fontSize}} color='white'></i>
                    {name}
                </button>
            </div>
        )
    }
}

export default NavBtn;
