import React, { useState } from 'react';
import './css/Content.css'
import WelcomeBar from './WelcomeBar.js'
import PreferedIndustries from './PreferedIndustries'
import ContactInfo from './ContactInfo'
import userimg from '../user.png'
import ContentItem from './ContentItem'
import ContetItemHeader from './ContentItemHeader'
import UserImgNamePN from './UserImgNamePN'
import LabelAndInput from './LabelAndInput';
import ChangeAbleRoundedImg from './ChangeAbleRoundedImg';
import Button from './Button'


const Content = ({ content }) => {

    let colors = content.colors

    let [title, setTitle] = useState(content.title)
    let [updated, setUpdated] = useState(content.updated)

    let titleColor = {
        color: colors.contentTitle
    }
    let updatedColor = {
        color: colors.contentUpdate
    }

    let hasStocks = true;
    let industries = ['Tech', 'Finance', 'Health', 'Materials']
    let person = {
        firstName: 'Magnus',
        lastName: 'Persson',
        phone: '079 946 3654',
        mail: 'magnus.persson@hotmail.com',
        adress: 'Lantmilsgatan 7',
        zipCode: '415 01',
        city: 'Göteborg',
        personNumber: '780717-4444'
    }

    // Testing some components
    const myProfile = [
        <ContetItemHeader key='0' title={{ titleText: 'Min Profil', color: '#3C4368' }} button={{ buttonText: 'Redigera', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <UserImgNamePN key='1' colors={{ title: '#A1A8C3', userValues: '#3D4465' }} userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />,
        <PreferedIndustries key='2' headingColor={colors.homeText[1]} indColor={colors.homeText[0]} industries={industries} />,
        <ContactInfo key='3' headingColor={colors.homeText[1]} contactsColor={colors.homeText[0]} person={person} />,
        
    ]

    const myOwn = [
        <ContetItemHeader key='0' title={{ titleText: 'Mitt Innehav', color: '#3C4368' }} button={{ buttonText: 'Min portfölj', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,

    ]
    const [firstName, setFirstName ] = useState(person.firstName)
    const [lastName, setLastName ] = useState(person.lastName)
    const [personNumber, setPersonNumber ] = useState(person.personNumber)
    const [adress, setAdress ] = useState(person.adress)
    const [city, setCity ] = useState(person.city)
    const [zipCode, setZipCode ] = useState(person.zipCode)
    const [phone, setPhone ] = useState(person.phone)
    const [mail, setMail ] = useState(person.mail)

    let edit = {
        bgColor: '#FDCC6B', 
        handleClick: () => {console.log("change")}
    }

    const preferencesMyProfile = [
        <ChangeAbleRoundedImg src={userimg} edit={edit} alt='User picture'/>,
        <div className='contactLabelInputSameLine'><LabelAndInput key={firstName} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Förnamn" text={firstName} handleChange={(e) => {setFirstName(e.target.value)}} />, 
        <LabelAndInput key={lastName} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Efternamn" text={lastName} handleChange={(e) => {setLastName(e.target.value)}} /></div>,
        <LabelAndInput key={personNumber} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Personnummer" text={personNumber} handleChange={(e) => {setPersonNumber(e.target.value)}} />,
        <LabelAndInput key={adress} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Adress" text={adress} handleChange={(e) => {setAdress(e.target.value)}} />,
        <div className='contactLabelInputSameLine'><LabelAndInput key={city} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Stad" text={city} handleChange={(e) => {setCity(e.target.value)}} />,
        <LabelAndInput key={zipCode} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Postnummer" text={zipCode} handleChange={(e) => {setZipCode(e.target.value)}} /></div>,
        <LabelAndInput key={phone} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="text" labelText="Telefonnummer" text={phone} handleChange={(e) => {setPhone(e.target.value)}} />,
        <LabelAndInput key={mail} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="mail" labelText="Email" text={mail} handleChange={(e) => {setMail(e.target.value)}} />,
        <Button bgColor='#FDCC6B' width='10%' marginleft= '60%' buttonText='Spara' handleClick={() => {console.log("change")}}   />
    ]

    const preferencesChangePassWord = [
        <LabelAndInput key={'nuvarande'} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="checkBox" labelText="Nuvarande lösenord" text={''} handleChange={(e) => {setLastName(e.target.value)}} />,
        <LabelAndInput key={'nytt'} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="password" labelText="Nytt lösenord" text={''} handleChange={(e) => {setLastName(e.target.value)}} />,
        <LabelAndInput key={'Bekräfta'} labelColor={colors.homeText[1]} textColor={colors.homeText[0]} type="password" labelText="Bekräfta nytt lösenord" text={''} handleChange={(e) => {setLastName(e.target.value)}} />

    ]
    

    return (
        <div id="Content" >
            <header>
                <h2 className="title" style={titleColor}>{title}</h2>
                {content.showLatestUpdate && <p className="updated" style={updatedColor}>Senast uppdaterat {updated}</p>}
            </header>
            <WelcomeBar bgColor={colors.greetingBarBg} updated={updated} name={content.name} hasStocks={hasStocks} />
            <div id="contentItems">
               {/* <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myProfile} />
    <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myOwn} />
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={preferencesMyProfile} />*/}
            <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={preferencesChangePassWord} />
            </div>
        </div>
    )
}

export default Content;
