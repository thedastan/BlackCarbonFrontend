import {useSelector} from "react-redux";


const UserInfo = () => {
    const state = useSelector(allState => {
        return {
            user: allState.userPage.user
        }
    })
    const outUserInfo = () => {
        const result = {
            name: "",
            position: "",
            nameClasses: "",
            positionClasses: ""
        }
        if(state.user.name) {
            result.name = state.user.name;
        }else{
            result.nameClasses = "text-yellow-500";
            result.name = 'Пользователь не написал свое имя';
        }
        if(state.user.position){
            result.position = state.user.position;
        }else{
            result.positionClasses = "text-yellow-500";
            result.position = "Пользователь не написал свою должность";
        }
        return (
            <div className="profile__user-info flex flex-col items-start justify-start">
                <span className={`${result.positionClasses} user-name text-white font-bold`}>
				    {result.name}
                </span>
                <span className={`${result.positionClasses} user-position text-white font-normal`}>
				    {result.position}
                </span>
            </div>
        )
    }
    return (
        <div className="profile__top items-center justify-center">
            <div className="w-full p-100 relative">
                <div className="profile__img absolute left-0 top-0 w-full h-full">
                    <img src={require('../../../assets/images/profile.jpg').default} alt="" className="object-cover w-full h-full" />
                </div>
            </div>
            {outUserInfo()}
        </div>
    )
}

export default UserInfo;