function getSpamEmails(subject, spam_words){
    const sentence = subject[0]
    const subSplit = sentence.split(' ')
    for(let i = 0; i < spam_words.length; i++){ 
    // let matches = []
    //const word = spam_words[i]
    for(let j = 0; j < subSplit.length; j++){
        if(spam_words[i] === subSplit[j]){
            return 'spam'
        } else {
            return 'not spam'
        }
    }
    }
}

//test code
console.log(getSpamEmails(['free prize worth millions'], ['free', 'millions']))// spam