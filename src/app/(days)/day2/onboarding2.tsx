import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View ,SafeAreaView, Pressable} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function onBardingScreen(){
    return(
    <SafeAreaView style={styles.page}>
        <Stack.Screen options={{headerShown:false}}/>
        <View style={styles.pageContent}>
            <FontAwesome5 style={styles.image} name="left" size={100} color="#CEF202" />
            <View style={styles.footer}>
                <Text style={styles.title}>Save better</Text>
                <Text style={styles.description}>
                    monitor your spending and contribution, ensuring everyday penny align with your family
                </Text>
                <View style={styles.buttonsRow}>
                    <Text style={styles.buttonText}>Skip</Text>
                    <Link href={'/day2/onboarding2'} asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                    </Link>
                   
                </View>
            </View>
        </View>
    </SafeAreaView> )
}
const styles = StyleSheet.create({
    page:{
        // alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        backgroundColor:'#15141A',
        padding:20
    },
    image:{
        alignSelf:'center',
        margin:20
    },
    title:{
        color:'#FDFDFD',
        fontSize:50,
        fontWeight: '500',
        fontFamily:'InterBlack',
        letterSpacing:1.3,
        marginVertical:10
    },
    description:{
        color:'gray',
        fontSize:20,
        fontFamily:'Inter',
        lineHeight:28
    },
    footer:{
        marginTop:'auto'
    },
    buttonsRow:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },
    buttonText:{
        color:'#FDFDFD',
        fontFamily:'InterSemi',
        fontSize:16,
        padding:15,
        paddingHorizontal:25
    },
    button:{
        backgroundColor:'#302E38',
        padding:15,
        borderRadius: 50,
        alignItems:'center'
    },
    pageContent:{
        padding:20,
        flex:1
    }
})