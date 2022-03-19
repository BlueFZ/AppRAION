import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const TipsScreen = () => {
    const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
          <TouchableOpacity 
          style={styles.BackButton}
          onPress={() => Navigation.navigate("EducationScreen")}
          >
            <Image
              source={require('../../icon/back.png')}
            />
          </TouchableOpacity>

          <Text style={styles.Edukasitxt}>
            Tips dan Trick Belajar
          </Text>

          <Image
          source={require('../../icon/bukufull.png')}
          style={{top: 20, left: 0, width:'100%'}}
          />
        </View>  

        <Text style={{fontSize: 11,position: 'absolute', top: 220, marginHorizontal: 30,}}>
        Di masa-masa penuh ujian seperti ini, belajar jadi suatu 
        “keharusan”. Akan tetapi, apakah cara belajar kamu sudah 
        efektif? Nah, kali ini edustation memberikan tips dan trick agar 
        belajar menjadi menyenangkan!
        </Text>

        <Text style= {{fontSize: 11, fontWeight: 'bold', position: 'absolute', top: 320, left: 25}}>
        Buat Suasana Belajar yang Nyaman
        </Text>

        <Text style= {{fontSize: 9, position: 'absolute', top: 338, left: -75, marginHorizontal: 100}}>
        Yang perlu kamu lakukan pertama adalah bagaimana cara membangun suasana belajar yang nyaman, seperti  belajar sambil mendengarkan musik, belajar di tempat-tempat yang nyaman dan santai. Seperti ruangan AC, taman, dan lain-lain.
        </Text>

        <Image
            source={require('../../icon/bulet.png')}
            style={{top: 140, left: 265}}
        />

        <Image
            source={require('../../icon/satu.png')}
            style={{top: 70, left: 295}}
        />

         <Text style= {{fontSize: 11, fontWeight: 'bold', position: 'absolute', top: 450, left: 175}}>
         Merangkum Pokok Pembelajaran        
         </Text>

        <Text style= {{fontSize: 9, position: 'absolute', top: 468, left: 75, marginHorizontal: 100}}>
        Mulailah membaca dan mengambil intisari dari pelajar tersebut. Hal ini akan membuat kemudahan mengingat dan juga mudah untuk memahami inti dari pembelajaran tersebut        
        </Text>

        <Image
            source={require('../../icon/bulet.png')}
            style={{top: 125, left: 40}}
        />

        <Image
            source={require('../../icon/dua.png')}
            style={{top: 53, left: 68}}
        />  

        <Text style= {{fontSize: 11, fontWeight: 'bold', position: 'absolute', top: 575, left: 20}}>
        Belajar Bersama Teman
        </Text>

        <Text style= {{fontSize: 9, position: 'absolute', top: 593, left: -75, marginHorizontal: 95}}>
        Metode ini seringkali di katakan metode yg paling efektif karena dalam suasana belajar berkelompok yang cukup santai otak menjadi lebih rileks menerima pelajaran atau materi yang akan diserap. Selain itu, hal-hal yang belum diketahui akan lebih mudah di selesaikan dengan bekerja sama dengan temanmu.        
        </Text>

        <Image
            source={require('../../icon/bulet.png')}
            style={{top: 133, left: 265}}
        />

        <Image
            source={require('../../icon/tiga.png')}
            style={{top: 63, left: 295}}
        /> 
        
    </View>
  )
}

export default TipsScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
    
    },

    BackButton: {
        top: 33,
      },
  
      Edukasitxt: {
        left: 100,
        fontSize: 20,
        fontWeight: 'bold',
      },
})