// import React, { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity, Text, Modal, TextInput, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import ProfileIcon from '../assets/svg/profile.svg';
// import SearchIcon from '../assets/svg/mpin.svg';
// import ChangPassIcon from '../assets/svg/chngpass.svg'
// import RateIcon from '../assets/svg/mpin.svg'
// import FeedBackIcon from '../assets/svg/feedback.svg'
// import ColorModeIcon from '../assets/svg/colorMode.svg'
// import ContactIcon from '../assets/svg/contact.svg';
// import SendRequestIcon from '../assets/svg/sendRequest.svg';
// import EnergyTipIcon from '../assets/svg/tips.svg'
// import LogoutIcon from '../assets/svg/Logout.svg'
// import StarIcon from '../assets/svg/star.svg';
// import { useNavigation } from '@react-navigation/native';

// const SettingScreen = () => {
//   const navigation = useNavigation(); // Access navigation object using useNavigation hook
//   const [modalVisible, setModalVisible] = useState(false);
//   const [profileModalVisible, setProfileModalVisible] = useState(false);
//   const [rateModalVisible, setRateModalVisible] = useState(false);
//   const [rating, setRating] = useState(0);

//   const menuOptions =
//     [
//       { icon: <ProfileIcon width={34} height={34} fill="#889c3c" />, text: 'Profile Information', onPress: () => setProfileModalVisible(true) },
//       { icon: <ChangPassIcon width={34} height={34} fill="#889c3c" />, text: 'Change Password', onPress: () => setModalVisible(true) },
//       { icon: <SearchIcon width={34} height={32} fill="#889c3c" />, text: 'Create Mpin' },
//       // { icon: <ColorModeIcon width={34} height={34} fill="#889c3c" />, text: 'Color Mode', onPress: handleLogin },
//       { icon: <RateIcon width={34} height={34} fill="#889c3c" />, text: 'Rate App', onPress: () => setRateModalVisible(true) },
//       { icon: <FeedBackIcon width={34} height={34} fill="#889c3c" />, text: 'Feedback' },
//       { icon: <EnergyTipIcon width={34} height={34} fill="#889c3c" />, text: 'Energy tips', onPress: handleEnergyTips },
//       { icon: <ContactIcon width={34} height={34} fill="#889c3c" />, text: 'Contact Us' },
//       { icon: <SendRequestIcon width={34} height={34} fill="#889c3c" />, text: 'Send Request' },
//       { icon: <LogoutIcon width={34} height={34} fill="#889c3c" />, text: 'Log Out', onPress: handleEnergyTips },
//     ];

//   const handleLogin = () => {/* Implement your login logic here */ };
//   const handleEnergyTips = () => {/* navigation.navigate('SharedElement') */ };

//   const Header = ({ title }) => (
//     <View style={styles.header}>
//       <Text style={styles.headerText}>{title}</Text>
//     </View>
//   );

//   const OptionItem = ({ option }) => (
//     <TouchableOpacity style={styles.option} onPress={option.onPress}>
//       {option.icon}
//       <Text style={styles.optionText}>{option.text}</Text>
//     </TouchableOpacity>
//   );

//   const renderStar = (index) => {
//     return (
//       <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
//         <StarIcon width={30} height={30} fill={index < rating ? '#889c3c' : 'grey'} />
//       </TouchableOpacity>
//     );
//   };


//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.mainHeader}>
//         <Text style={styles.mainHeaderText}>Settings</Text>
//       </View>
//       <Header title="Account" />
//       <View style={styles.optionContainer}>
//         {menuOptions.slice(0, 3).map((option, index) => (
//           <OptionItem key={index} option={option} />
//         ))}
//       </View>

//       <Header title="App Info" />
//       <View style={styles.optionContainer}>
//         {menuOptions.slice(3, 6).map((option, index) => (
//           <OptionItem key={index} option={option} />
//         ))}
//       </View>

//       <Header title="Stay Connected" />
//       <View style={styles.optionContainer}>
//         {menuOptions.slice(6, 12).map((option, index) => (
//           <OptionItem key={index} option={option} />
//         ))}
//       </View>

//       {/* Modal for Change Password */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Change Password</Text>
//             <Text style={styles.userInfo}>Name: Nilesh Powar</Text>
//             <Text style={styles.userInfo}>Consumer ID: 5012355</Text>
//             <Text style={styles.infoText}>Please change your password every three months for security reasons</Text>
//             <TextInput style={styles.input} placeholder="Current Password" secureTextEntry={true} />
//             <TextInput style={styles.input} placeholder="New Password" secureTextEntry={true} />
//             <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.button, styles.submitButton]}>
//                 <Text style={styles.buttonText}>Submit</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>


//       {/* Profile Information Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={profileModalVisible}
//         onRequestClose={() => setProfileModalVisible(!profileModalVisible)}
//       >
//         <View style={styles.profileModalContainer}>
//           <View style={styles.profileModalContent}>
//             <Text style={styles.profileModalTitle}>Profile Information</Text>

//             {/* Profile Card */}
//             <View style={styles.card}>
//               <Image
//                 style={styles.profileImage}
//                 source={require('../assets/CR7.jpg')} // Provide the source for profile image
//               />
//               <View style={styles.profileInfo}>
//                 <Text style={styles.profileInfoNameText}>Nilesh Powar</Text>
//                 <Text style={styles.profileInfoInfoText}>Consumer ID: 5012355</Text>
//               </View>
//             </View>

//             {/* Additional profile details */}
//             <View style={styles.detailCard}>
//               <View style={styles.detailItem}>
//                 <Text style={styles.detailLabel}>Service Date:</Text>
//                 <Text style={styles.detailValue}>01/01/2023</Text>
//               </View>
//               <View style={styles.detailItem}>
//                 <Text style={styles.detailLabel}>Meter Serial Number:</Text>
//                 <Text style={styles.detailValue}>1234567890</Text>
//               </View>
//               <View style={styles.detailItem}>
//                 <Text style={styles.detailLabel}>Email:</Text>
//                 <Text style={styles.detailValue}>nilesh.powar@esyasoft.com</Text>
//               </View>
//             </View>

//             {/* Okay button */}
//             <TouchableOpacity style={styles.okayButton} onPress={() => setProfileModalVisible(!profileModalVisible)}>
//               <Text style={styles.okayButtonText}>Okay</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>


//       {/* Rate Our App Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={rateModalVisible}
//         onRequestClose={() => setRateModalVisible(!rateModalVisible)}
//       >
//         <View style={styles.starRateModalContainer}>
//           <View style={styles.starRateModalContent}>
//             <Text style={styles.starRateModalTitle}>Rate Our App</Text>
//             <Text style={styles.rateInfoText}>Share your experience by rating us – it shapes our future updates</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => renderStar(index))}
//             </View>
//             <View style={styles.starButtonContainer}>
//               <TouchableOpacity style={[styles.starButton, styles.starCancelButton]} onPress={() => setRateModalVisible(false)}>
//                 <Text style={styles.starButtonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.starButton, styles.starSubmitButton]}>
//                 <Text style={styles.starButtonText}>Submit</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// export default SettingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#F8E9B0',
//     backgroundColor: "#E5E4E2",
//     paddingHorizontal: 20,
//   },

//   mainHeader: {
//     marginTop: 10,
//     alignItems: 'center',
//   },

//   mainHeaderText: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: '#889c3c',
//   },

//   header: {
//     marginTop: 20,
//     paddingHorizontal: 10,
//     backgroundColor: '#889c3c',
//     borderTopLeftRadius: 10, // Top left corner radius
//     borderTopRightRadius: 10,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: 17,
//     fontWeight: '500',
//     color: 'white',
//     paddingBottom: 12,
//     paddingTop: 5
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     backgroundColor: '#FFF',
//     marginTop: -10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     // Adjust this value as needed
//   },
//   option: {
//     width: '30%',
//     backgroundColor: '#FFF',
//     alignItems: 'center',
//     padding: 10,
//     marginBottom: 8,
//     marginTop: 10,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   optionText: {
//     marginTop: 5,
//     fontSize: 14,
//     color: '#889c3c',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   // Modal styles
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     borderRadius: 10,
//     width: '80%',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#889c3c',
//     textAlign: 'center',
//   },
//   userInfo: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: 'black',
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 20,
//     color: 'black',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cancelButton: {
//     backgroundColor: 'red',
//   },
//   submitButton: {
//     backgroundColor: 'green',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },


//   // Profile Modal styles
//   profileModalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   profileModalContent: {
//     backgroundColor: '#FFF',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     borderRadius: 10,
//     width: '90%',
//   },
//   profileModalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#889c3c',
//     textAlign: 'center',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     backgroundColor: '#889c3c',
//     borderRadius: 10,
//     padding: 5,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   profileInfo: {
//     marginLeft: 20,
//   },
//   profileInfoNameText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: 'white',
//   },
//   profileInfoInfoText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'white',
//   },
//   detailItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   detailLabel: {
//     width: 150,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   detailValue: {
//     flex: 1,
//     fontSize: 16,
//     color: 'black',
//   },
//   okayButton: {
//     backgroundColor: '#889c3c',
//     paddingVertical: 10,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   okayButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },


//   // Rate Modal styles
//   rateInfoText: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 10
//   },
//   starRateModalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   starRateModalContent: {
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     borderRadius: 10,
//     width: '80%',
//   },
//   starRateModalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#889c3c',
//     textAlign: 'center',
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   starButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   starButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   starCancelButton: {
//     backgroundColor: 'red',
//   },
//   starSubmitButton: {
//     backgroundColor: 'green',
//   },
//   starButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

import {ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import React, { useRef, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { CommonTextInput } from '../CommonTextInput';
import { TouchableWithoutFeedbackComponent } from 'react-native';
import { flex, fontSize, fontWeight, margin, marginPosition, styles } from '../styles';
import {IconComponent, Icons} from '../IconComponent'
import { View } from 'moti';
import {ButtonComponent} from '../ButtonComponent'
import {emailValidation} from '../ValidationComponent'
import {passwordValidation} from '../ValidationComponent'


const SettingScreen = () => {

  const [showPassword,setShowPassword] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  console.log('email entered:',email)
  // console.log(emailValidation(email));

  //validate email
const handleEmail = (email)=>{
  setEmail(email)
  if(!emailValidation(email)){
    setError('Enter a Valid Email')
  } else if(emailValidation(email) || email.length ===0){
    setError('')
  }
}


const handlePassword = (password)=>{
  setPassword(password)
  if(passwordValidation(password)){
    const pass = passwordValidation(password)
    setError(pass)
  } else {
    setError('')
  }
}
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'} automaticallyAdjustKeyboardInsets={true}>
    <SafeAreaView style={[flex(1),styles.allCenter]}>
    <Text style={[margin(30),fontSize(28),fontWeight(600),{color:'#889c3c'}]}>Meter Replacement</Text>
      <Text style={[margin(30),fontSize(20),fontWeight(400),styles.Red]}>Login to your Account</Text>
      <View style={[{gap:30}]}>
      
      <CommonTextInput placeholderTextColor={'gray'} placeholder={'Email'} name={'mail'} type={Icons.Entypo} style={[styles.Red,fontSize(22)]} 
      onChangeText={handleEmail}
      value={email} />
      <CommonTextInput placeholderTextColor={'gray'} placeholder={'Password'}   name={'lock'} type={Icons.Entypo} style={[styles.Red,fontSize(22)]} secureTextEntry={showPassword} name2={showPassword?'eye-with-line':'eye'} type2={Icons.Entypo} onPress={()=>setShowPassword(!showPassword)} onChangeText={(password)=>handlePassword(password)} value={password} onBlur={()=>setError('')}/>
      </View>
      <Text style={[styles.Red]}>{error}</Text>
      <ButtonComponent/>
    </SafeAreaView>
    </ScrollView>
  );
};

export default SettingScreen;

