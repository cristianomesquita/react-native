import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 20,
  },
  TextInputContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textStyle: {
    fontSize: 16,
  },
  buttonStyle: {
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    borderColor: '#ff6c00',
    marginBottom: 20,
  },
});

const Home = () => {
  const [text, setText] = useState(null);
  const [todos, setTodo] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.TextInputContainer}>
        <TextInput
          onChangeText={txt => setText(txt)}
          placeholder="Digite alguma coisa"
          style={styles.textStyle}
          value={text}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          if (text) {
            setTodo([
              ...todos,
              {
                id: Math.random()
                  .toString()
                  .substr(2),
                text,
              },
            ]);
          }
          setText(null);
        }}>
        <View style={styles.buttonStyle}>
          <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 16}}>
            Adicionar todo
          </Text>
        </View>
      </TouchableOpacity>

      <View>
        {todos.map((item, idx) => (
          <Text
            key={item.id}
            style={{backgroundColor: idx % 2 === 0 ? '#FFF' : '#81d4fa'}}>
            {item.text}
          </Text>
        ))}
      </View>
    </View>
  );
};
export default Home;
