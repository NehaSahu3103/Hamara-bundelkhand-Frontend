import React from "react";
import "./translate.css";

const Translate = () => {
  return (
    <div id="translate" className="translate-container">
      {/* <textarea className='input-text' placeholder='Enter text to translate...'></textarea>
      <button className='translate-button'>Translate</button> */}
      <div className="translate_head">
        <h2>Translated Text</h2>
      </div>
      <table>
        <tr>
          <th>Bundeli</th>
          <th>Hindi</th>
          <th>English</th>
        </tr>

        <tr>
          <td>तुमओ का नाओ ?</td>
          <td>आपका नाम क्या है ?</td>
          <td>what is  your name ?</td>
        </tr>

        <tr>
          <td>कय कैसे हो ?</td>
          <td>आप कैसे हो ? </td>
          <td>How are you ?</td>
        </tr>

        <tr>
          <td>क हो गयो तुमे आज ? उसइ से लग रय ?</td>
          <td>क्या हो गया तुम्हे आज ? दुखी कयो हो ?</td>
          <td>What happened to you today? Why are you sad?</td>
        </tr>

        <tr>
          <td>अच्छा एसो है ? हमे पता ने हतो </td>
          <td>अच्छा ऐसा है , मुझे पता नहीं था </td>
          <td>Oh, is that so? I didn't know.</td>
        </tr>

        <tr>
          <td>कय तुमओ घर कहा है ?</td>
          <td>आपका घर  कहाँ है ?</td>
          <td>Where is your house?</td>
        </tr>

        <tr>
          <td>हमें बिल्कुल अच्छो नाइ लग रहो ।</td>
          <td>मुझे बिल्कुल अच्छा नहीं लग रहा है ।</td>
          <td>I am not feeling good at all.</td>
        </tr>

        <tr>
          <td>कय तुम हमे चीनत हो ? </td>
          <td>आप मुझे जानते हो क्या ?</td>
          <td>Do you know me?</td>
        </tr>

        <tr>
          <td>हमे भोपाल मै अच्छो लगत है ।</td>
          <td>मुझे भोपाल मे अच्छा लगता हैं  ।</td>
          <td>I like being in Bhopal.</td>
        </tr>

        <tr>
          <td>कय तुम इसो ने लिखो हम हस हस के मर जेहे </td>
          <td>भाई इस तरह मत लिखो हस हस के मर जाऊंगा</td>
          <td>Brother, don't write like this; I'll die laughing</td>
        </tr>

        <tr>
          <td>हमओ जहाँ मन होयेये उते जेहे । </td>
          <td>मेरा जहां मन होगा वहां जाऊंगा</td>
          <td>I will go wherever I feel like</td>
        </tr>

        <tr>
          <td>पोच जाओ सो फोन लगैयो ।</td>
          <td>पहुंच के फोन लगाना ।</td>
          <td>Call me after reaching.</td>
        </tr>

        <tr>
          <td>खाना खा लो जल्दी अबेर हो रऐ है ।</td>
          <td>खाना खा लो जल्दी देर हो रही है ।</td>
          <td>Eat quickly, it's getting late.</td>
        </tr>

        <tr>
          <td>कल मंदिर चल हो हमए संगे ।</td>
          <td>कल मंदिर चलोगे मेरे साथ ।</td>
          <td>Will you go to the temple with me tomorrow?</td>
        </tr>
        
        
        <tr>
          <td>
            हम जो बाद मे कर है | साचि बताओ मालक कैसो गओ तुमाओ दिना | इते आओ{" "}
          </td>
          <td>मैं ये बाद मे करुंगा | मुझे सच बताओ | कैसा रहा दिन | यहाँ आओ </td>
          <td>I will do this later. Tell me the truth. How was the day? Come here</td>
        </tr>

        <tr>
          <td>
            हम तुम्हे काये लये | तुम खुद्को पांच साले बाद कहा देखत | तुम हम्से
            का चाहत | जो सहि रेह्त है हमोरे बोइ करत है | हमोरे जो कचु केह्त है
          </td>
          <td>
            मैं आप को क्यु चुनु | पांच साल बाद आप स्वयं को कहां देखते हैं | आप
            मुझसे क्या चाहते हैं |हम वही करते हैं जो सही है |
          </td>
          <td>Why should I choose you? Where do you see yourself in five years?
             What do you want from me? We do what is right.</td>
        </tr>

        <tr>
          <td>
            वो करत सोइ है | तुम हमोरो कि कम्पिनि मे काम कये कर्वो चाहत | हमोरो
            को तुमाइ मदद चाने | हम अंदर आ जाबे का
          </td>
          <td>
            हम जो कहते हैं वो करते हैं | आप हमारी कंपनी में काम क्यों करना चाहते
            हैं | हमे आपकी मदद की जरूरत है | क्या मैं अंदर आ सकता हूँ |
          </td>
          <td>
          We do what we say. Why do you want to work in our company? 
          We need your help. Can I come in?
          </td>
        </tr>

        <tr>
          <td>
            हमने तो खा लओ खाना | बा खाना खा लेहे | बो चलो जेहे | रेन दो हो गओ |
            तुमाओ का नाम | कये तुम का कर रहे ते |
          </td>
          <td>
            मैंने खाना खा लिया है | वह खाना खा लेगी | वह चला जायेगा | जाने दो हो
            गया | तुम्हारा नाम क्या है | तुम क्या कर रहे थे |
          </td>
          <td>
          I have eaten. She will eat the food. He will go away. Let it be, it's done. 
          What is your name? What were you doing?
          </td>
        </tr>

        <tr>
          <td>
            हम तुमाये संगे जाबे तैजार है | तुम हमे चाहत हो के नहि | हम तुम्हे
            नहि चाहत | उ बक्सा को उठा लेओ | तुमने खाना खा लओ | कैसे हो तुम
          </td>
          <td>
            मै तुम्हारे साथ चलने के लिए तैयार हूं | क्या तुम मुझसे प्यार करती हो
            | मै तुमसे प्यार नहीं करती हूं | उस बॉक्स को उठा लोगे | तुम खाना खा
            लिए | कैसे हो आप
          </td>
          <td>
          I am ready to go with you. Do you love me? I do not love you. 
          Will you pick up that box? Have you eaten? How are you?
          </td>
        </tr>

        <tr>
          <td>
            अब का कर्बि | भूख लग रहि है | कैसे बोलत | का कर हो | बिछु | बिलैज़्ज़ा
            | बुरो समय सब को आत है कोनऊ बगर जात कोनऊ बन जात | सुदरो कोनऊ नहि
            रेह्त बस कोनऊ कोनऊ के करम बस पता नहि रेह्त
          </td>
          <td>
            अब क्या करूं | भूख लगी है | कैसी बातें करते हो | क्या करोगे | बिच्छू
            | बिल्ली | बुरा वक्त सब का आता है काेई बिखर जाता है ताे काेई निखर
            जाता है | बेक़सूर कौन होता हैं इस ज़माने में बस सबके गुनाह पता नहीं
            चलते
          </td>
          <td>
          What should I do now? I am hungry. What kind of things do you say? 
          What will you do? Scorpion. Cat. Bad times come for everyone; some break down, while others shine. 
          Who is innocent in this world? It's just that not everyone's sins are known.
          </td>
        </tr>

        <tr>
          <td>
            हम का कर सकत | बो का के रहो | जाओ मालक सपर लो | तुम कहा सो गये यार |
            बे काये के पैसे दे दये | तुम काये चला रहे गाड़ी |
          </td>
          <td>
            मै क्या कर सकता हूं | वह क्या पूछ रहा है | जाओ नहा लो यार | तुम कहा
            सो गए | वह किसका पैसा दिया है | तुम गाड़ी क्यू चलायोगे|
          </td>
          <td>
          What can I do? What is he asking? Go take a bath, buddy. 
          Where did you fall asleep? Whose money did he give? Why will you drive the car?
          </td>
        </tr>
 
      </table>
    </div>
  );
};

export default Translate;
