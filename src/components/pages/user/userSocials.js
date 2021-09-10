import { useSelector } from 'react-redux';
import {objectLength} from "../../../utils/object-methods";
import SocialItem from "./socialItem";
import socialIcons from "../../../constants/socialIcons";

const UserSocials = () => {
    const state = useSelector(allState => {
        return {
            user: allState.userPage.user
        }
    });
    const outSocials = () => {
        const { youtube, linkedin, whatsapp, instagram, twitter, telegram, facebook } = state.user;
        const socials = {
            youtube,
            linkedin,
            whatsapp,
            instagram,
            twitter,
            telegram,
            facebook
        }
        const nonEmptySocials = {}
        for(let i in socials){
            if(socials[i]){
                nonEmptySocials[i] = socials[i];
            }
        }
        if(objectLength(nonEmptySocials)){
            const htmlArray = [];
            for(let i in nonEmptySocials){
                const icon = socialIcons[i];
                htmlArray.push(
                    <SocialItem key={i} icon={icon} link={nonEmptySocials[i]} />
                )
            }
            return htmlArray;
        }
        return <div className="user__socials flex w-full">
            <span className="text-white text-center socials-empty">Пользователь не поставил ссылку ни на один социальную сеть</span>
        </div>
    }
    return outSocials();
}

export default UserSocials;