
// Experiment file for NPI and First year EEG norming

// This says: "begin with the intro, then follow it with real sentences evenly
// shuffled with npi sentences, with each sentece separated by the "sep"
// item (a 1 second pause).

var shuffleSequence = seq("consent","demo","intro", "intro1","intro2","practice","getReady",sepWith("sep", startsWith("wig")),"debrief","exit");
var counterOverride = 3;
var practiceItemTypes = ["practice"];

// Just to avoid typing AcceptabilityJudgment over and over.

var showProgressBar = true;
var practiceItemTypes = ["practice"];


var defaults = [
    "Message", { transfer: "keypress"}, //allows forms to continue using any key
    "Message_AY", { transfer: "keypress"}, //allows forms to continue using any key
    "AY_Form", {continueOnReturn: true, continueMessage: null}, //allows completion task to continue using the return key, eliminates the Click here to continue message
]; 

var items = [
    
["sep", Separator, {transfer: 0, normalMessage: "", errorMessage: ""}],
["consent", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "cloze_wig_consent_2018.html" }} ],
["intro", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions.html" }} ],
["intro1", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions1.html" }} ],
["intro2", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions2.html" }} ],
["demo", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "demographics.html" }} ],
["debrief", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "debrief_harvard.html" }} ],

["exit", "AY_Form", {consentRequired: false, continueMessage:"Click here to continue", html: {include: "exit.html" }} ],

    
["practice", "AY_Form", blank("The mom was shopping for her Thanksgiving" + "____________")],
["practice", "AY_Form",blank("The mom was shopping for her Thanksgiving dinner so she went to the supermarket. At the" + "____________")],
["practice", "AY_Form",blank("The mom was shopping for her Thanksgiving dinner so she went to the supermarket. At the supermarket she bought" + "____________")],


["getReady", "AY_Form", {consentRequired: true, continueMessage:"Click here to continue", 
                    html: ["div",["p", "Thats it for the practice. Get ready for the experiment!"],]}],

            
// WIG Study: Norming 
    
[["wig",1], "AY_Form", blank("So a few " + "____________")],
[["wig",2], "AY_Form", blank("So a few years ago I was diagnosed with " + "____________")],
[["wig",3], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five" + "____________")],
[["wig",4], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start " + "____________")],
[["wig",5], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start chemotherapy. Now, when you have the kind of" + "____________")],
[["wig",6], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start chemotherapy. Now, when you have the kind of chemotherapy I had you lose your " + "____________")],
[["wig",7], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start chemotherapy. Now, when you have the kind of chemotherapy I had you lose your hair. Now in one" + "____________")],
[["wig",8], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start chemotherapy. Now, when you have the kind of chemotherapy I had you lose your hair. Now in one way this seemed like such a small" + "____________")],
[["wig",9], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start chemotherapy. Now, when you have the kind of chemotherapy I had you lose your hair. Now in one way this seemed like such a small price to pay you know." + "____________")],
[["wig",10], "AY_Form", blank("So a few years ago I was diagnosed with cancer and about five minutes later I had to start chemotherapy. Now, when you have the kind of chemotherapy I had you lose your hair. Now in one way this seemed like such a small price to pay you know. My " + "____________")],

// Clear previous discourse 
[["wig",11], "AY_Form", blank("My hair my" + "____________")],
[["wig",12], "AY_Form", blank("My hair my life my" + "____________")],
[["wig",13], "AY_Form", blank("My hair my life my hair my " + "____________")],
[["wig",14], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my " + "____________")],
[["wig",15], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my life. And I was kind of hoping that after my" + "____________")],
[["wig",16], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my life. And I was kind of hoping that after my hair fell out and grew back I’d get better " + "____________")],
[["wig",17], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my life. And I was kind of hoping that after my hair fell out and grew back I’d get better hair. I have this kind of unruly" + "____________")],
[["wig",18], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my life. And I was kind of hoping that after my hair fell out and grew back I’d get better hair. I have this kind of unruly hair and it has a " + "____________")],
[["wig",19], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my life. And I was kind of hoping that after my hair fell out and grew back I’d get better hair. I have this kind of unruly hair and it has a mind of its own. And no matter how expensive my" + "____________")],
[["wig",20], "AY_Form", blank("My hair my life my hair my life, I don’t know. I think I’ll pick my life. And I was kind of hoping that after my hair fell out and grew back I’d get better hair. I have this kind of unruly hair and it has a mind of its own. And no matter how expensive my haircut it looks a lot of the " + "____________")],

// Clear previous discourse 

[["wig",21], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental" + "____________")],
[["wig",22], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my " + "____________")],
[["wig",23], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the" + "____________")],
[["wig",24], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any, forced me to sort of reconsider my whole" + "____________")],
[["wig",25], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any, forced me to sort of reconsider my whole sense of my personal" + "____________")],
[["wig",26], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any, forced me to sort of reconsider my whole sense of my personal style. And in a way my whole " + "____________")],
[["wig",27], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any forced me to sort of reconsider my whole sense of my personal style. And in a way my whole sense of myself. What kind of cancer" + "____________")],
[["wig",28], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any, forced me to sort of reconsider my whole sense of my personal style. And in a way my whole sense of myself. What kind of cancer person was I gonna be? Like how would I wear my " + "____________")],
[["wig",29], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any, forced me to sort of reconsider my whole sense of my personal style. And in a way my whole sense of myself. What kind of cancer person was I gonna be? Like how would I wear my disease? Would I try to hide it or would I announce it to the whole" + "____________")],
[["wig",30], "AY_Form", blank("And no matter how expensive my haircut it looks a lot of the time like I’ve had it cut by a mental patient. Um. But no matter how I felt about losing my hair just the prospect of not having any, forced me to sort of reconsider my whole sense of my personal style. And in a way my whole sense of myself. What kind of cancer person was I gonna be? Like how would I wear my disease? Would I try to hide it or would I announce it to the whole world? In other" + "____________")],

// Clear previous discourse 

[["wig",31], "AY_Form", blank("In other words was I gonna be a" + "____________")],
[["wig",32], "AY_Form", blank("In other words was I gonna be a scarf" + "____________")],
[["wig",33], "AY_Form", blank("In other words was I gonna be a scarf person or a " + "____________")],
[["wig",34], "AY_Form", blank("In other words was I gonna be a scarf person or a wig" + "____________")],
[["wig",35], "AY_Form", blank("In other words was I gonna be a scarf person or a wig person? Cause it seemed to me that if I showed up" + "____________")],
[["wig",36], "AY_Form", blank("In other words was I gonna be a scarf person or a wig person? Cause it seemed to me that if I showed up places suddenly wearing a " + "____________")],
[["wig",37], "AY_Form", blank("In other words was I gonna be a scarf person or a wig person? Cause it seemed to me that if I showed up places suddenly wearing a scarf all the " + "____________")],
[["wig",38], "AY_Form", blank("In other words was I gonna be a scarf person or a wig person? Cause it seemed to me that if I showed up places suddenly wearing a scarf all the time" + "____________")],
[["wig",39], "AY_Form", blank("In other words was I gonna be a scarf person or a wig person? Cause it seemed to me that if I showed up places suddenly wearing a scarf all the time people would know it was because I had gone bald. And they would probably guess why. Um. But if I showed up wearing a " + "____________")],
[["wig",40], "AY_Form", blank("In other words was I gonna be a scarf person or a wig person? Cause it seemed to me that if I showed up places suddenly wearing a scarf all the time people would know it was because I had gone bald. And they would probably guess why. Um. But if I showed up wearing a wig, even the " + "____________")],

// Clear previous discourse 

[["wig",41], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a" + "____________")],
[["wig",42], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a" + "____________")],
[["wig",43], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this " + "____________")],
[["wig",44], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a " + "____________")],
[["wig",45], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a scarf or a " + "____________")],
[["wig",46], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a scarf or a wig, blend in or not blend in. So I thought about it. And um I thought that my… my truer" + "____________")],
[["wig",47], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a scarf or a wig, blend in or not blend in. So I thought about it. And um I thought that my… my truer self would wear a " + "____________")],
[["wig",48], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a scarf or a wig, blend in or not blend in. So I thought about it. And um I thought that my… my truer self would wear a scarf you know cause I uh have a lot of self righteous" + "____________")],
[["wig",49], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a scarf or a wig, blend in or not blend in. So I thought about it. And um I thought that my… my truer self would wear a scarf you know cause I uh have a lot of self righteous integrity. And uh haha I thought a " + "____________")],
[["wig",50], "AY_Form", blank("But if I showed up wearing a wig, even the people who could tell it was a wig would probably assume that I was wearing it because I didn’t want to talk that much about why. If I wore a wig I’d be saying to everybody “please, just let me blend in!” So I uh uh had this dilemma, uh, whether to wear a scarf or a wig, blend in or not blend in. So I thought about it. And um I thought that my… my truer self would wear a scarf you know cause I uh have a lot of self righteous integrity. And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my " + "____________")],

// Clear previous discourse 

[["wig",51], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one " + "____________")],
[["wig",52], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my " + "____________")],
[["wig",53], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my" + "____________")],
[["wig",54], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful " + "____________")],
[["wig",55], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful dentist, very kind and generous and understanding about those of us who showed up needing " + "____________")],
[["wig",56], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful dentist, very kind and generous and understanding about those of us who showed up needing root " + "____________")],
[["wig",57], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful dentist, very kind and generous and understanding about those of us who showed up needing root canals cause we had failed to floss in our twenties. And she used to say, “Oh you know Jenny, in terms of" + "____________")],
[["wig",58], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful dentist, very kind and generous and understanding about those of us who showed up needing root canals cause we had failed to floss in our twenties. And she used to say, “Oh you know Jenny, in terms of evolution, our" + "____________")],
[["wig",59], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful dentist, very kind and generous and understanding about those of us who showed up needing root canals cause we had failed to floss in our twenties. And she used to say, “Oh you know Jenny, in terms of evolution, our teeth are only supposed to last us about forty five" + "____________")],
[["wig",60], "AY_Form", blank("And uh haha I thought a wig would be dishonest and I wasn’t ashamed of my disease. So one night uh I ran into my friend Ruth. Now I had met Ruth originally because she was my dentist. And she was a wonderful dentist, very kind and generous and understanding about those of us who showed up needing root canals cause we had failed to floss in our twenties. And she used to say, “Oh you know Jenny, in terms of evolution, our teeth are only supposed to last us about forty five years so you are doing great!” And um she’d become my " + "____________")],


// Clear previous discourse 

[["wig",61], "AY_Form", blank("And um she’d become my friend. And our" + "____________")],
[["wig",62], "AY_Form", blank("And um she’d become my friend. And our kids had become " + "____________")],
[["wig",63], "AY_Form", blank(" And um she’d become my friend. And our kids had become friends. And they even went to the same " + "____________")],
[["wig",64], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible " + "____________")],
[["wig",65], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible coincidence she and I both had the same kind of " + "____________")],
[["wig",66], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible coincidence she and I both had the same kind of cancer. Only she was way much farther down the" + "____________")],
[["wig",67], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible coincidence she and I both had the same kind of cancer. Only she was way much farther down the chemo" + "____________")],
[["wig",68], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible coincidence she and I both had the same kind of cancer. Only she was way much farther down the chemo path than I was and had already lost her" + "____________")],
[["wig",69], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible coincidence she and I both had the same kind of cancer. Only she was way much farther down the chemo path than I was and had already lost her hair. So I’d seen her a few" + "____________")],
[["wig",70], "AY_Form", blank("And um she’d become my friend. And our kids had become friends. And they even went to the same school cause she’d recommended it for mine. And by some horrible coincidence she and I both had the same kind of cancer. Only she was way much farther down the chemo path than I was and had already lost her hair. So I’d seen her a few weeks earlier just wearing a " + "____________")],

// Clear previous discourse 

[["wig",71], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a" + "____________")],
[["wig",72], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school " + "____________")],
[["wig",73], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old" + "____________")],
[["wig",74], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big" + "____________")],
[["wig",75], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big corona of dark curly" + "____________")],
[["wig",76], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big corona of dark curly hair. And I said to her “Ruth, I love your" + "____________")],
[["wig",77], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big corona of dark curly hair. And I said to her “Ruth, I love your hair!” And she said, “It’s a" + "____________")],
[["wig",78], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big corona of dark curly hair. And I said to her “Ruth, I love your hair!” And she said, “It’s a wig!” “I never thought I’d wear a " + "____________")],
[["wig",79], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big corona of dark curly hair. And I said to her “Ruth, I love your hair!” And she said, “It’s a wig!” “I never thought I’d wear a wig! But you know it’s kind of nice when you grow old! It’s a little dressy! It’s kinda creepy but it’s dressy!” And I looked at her head and I…I actually I could tell that it was a" + "____________")],
[["wig",80], "AY_Form", blank("So I’d seen her a few weeks earlier just wearing a scarf and uh that’s why I was very surprised when I ran into her at a school play and there she was uh with uh all her old hair back, this big corona of dark curly hair. And I said to her “Ruth, I love your hair!” And she said, “It’s a wig!” “I never thought I’d wear a wig! But you know it’s kind of nice when you grow old! It’s a little dressy! It’s kinda creepy but it’s dressy!” And I looked at her head and I…I actually I could tell that it was a wig if I looked really closely. But I thought it looks very nice. And I thought, “well if Ruth can feel good in a" + "____________")],

// Clear previous discourse 

[["wig",81], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a " + "____________")],
[["wig",82], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical" + "____________")],
[["wig",83], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole" + "____________")],
[["wig",84], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing." + "____________")],
[["wig",85], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing.” And this seemed so bizarre as to be almost unbelievable and really" + "____________")],
[["wig",86], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing.” And this seemed so bizarre as to be almost unbelievable and really reason enough to get a " + "____________")],
[["wig",87], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing.” And this seemed so bizarre as to be almost unbelievable and really reason enough to get a wig. And uh I .. I love free " + "____________")],
[["wig",88], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing.” And this seemed so bizarre as to be almost unbelievable and really reason enough to get a wig. And uh I .. I love free things you know particularly when my" + "____________")],
[["wig",89], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing.” And this seemed so bizarre as to be almost unbelievable and really reason enough to get a wig. And uh I .. I love free things you know particularly when my insurance" + "____________")],
[["wig",90], "AY_Form", blank("And I thought, “well if Ruth can feel good in a wig then maybe I could too.” It seemed unlikely um but possible. So… I thought about it and I thought maybe I should just…you know, consider it… just consider wearing… wearing a wig. So then Ruth said to me “You know Jenny you should get one. Medical insurance pays for the whole thing.” And this seemed so bizarre as to be almost unbelievable and really reason enough to get a wig. And uh I .. I love free things you know particularly when my insurance company pays for them. And uh I found out that " + "____________")],

// Clear previous discourse 

[["wig",91], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of " + "____________")],
[["wig",92], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate " + "____________")],
[["wig",93], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great" + "____________")],
[["wig",94], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was" + "____________")],
[["wig",95], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was cancer" + "____________")],
[["wig",96], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was cancer swag. So a couple of" + "____________")],
[["wig",97], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was cancer swag. So a couple of weeks go by and my" + "____________")],
[["wig",98], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was cancer swag. So a couple of weeks go by and my hair does fall out. Now it didn’t just fall out all at once. It sort of gradually gave up the" + "____________")],
[["wig",99], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was cancer swag. So a couple of weeks go by and my hair does fall out. Now it didn’t just fall out all at once. It sort of gradually gave up the ghost. You know first in these" + "____________")],
[["wig",100], "AY_Form", blank("And uh I found out that wigs cost like hundreds and hundreds of dollars so this seemed like the ultimate freebie. You know it was like great swag even if it was cancer swag. So a couple of weeks go by and my hair does fall out. Now it didn’t just fall out all at once. It sort of gradually gave up the ghost. You know first in these strands in my" + "____________")],

// Clear previous discourse 

[["wig",101], "AY_Form", blank("You know first in these strands in my brush. And then in " + "____________")],
[["wig",102], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my " + "____________")],
[["wig",103], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower " + "____________")],
[["wig",104], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead" + "____________")],
[["wig",105], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead mouse down there. And uh.. every" + "____________")],
[["wig",106], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead mouse down there. And uh.. every time I looked in the" + "____________")],
[["wig",107], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead mouse down there. And uh.. every time I looked in the mirror my baldness told me how sick I was. Even, in spite of all this optimism and cheerfulness that I was sort of summoning. And I wasn’t completely" + "____________")],
[["wig",108], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead mouse down there. And uh.. every time I looked in the mirror my baldness told me how sick I was. Even, in spite of all this optimism and cheerfulness that I was sort of summoning. And I wasn’t completely bald there. I had these sad whips of " + "____________")],
[["wig",109], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead mouse down there. And uh.. every time I looked in the mirror my baldness told me how sick I was. Even, in spite of all this optimism and cheerfulness that I was sort of summoning. And I wasn’t completely bald there. I had these sad whips of hair here and there that somehow just made it worse. My" + "____________")],
[["wig",110], "AY_Form", blank("You know first in these strands in my brush. And then in clumps in my shower drain that made me think that there was a dead mouse down there. And uh.. every time I looked in the mirror my baldness told me how sick I was. Even, in spite of all this optimism and cheerfulness that I was sort of summoning. And I wasn’t completely bald there. I had these sad whips of hair here and there that somehow just made it worse. My head seemed to be saying to me, “hello sickie, hello sick" + "____________")],

// Clear previous discourse 

[["wig",111], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with" + "____________")],
[["wig",112], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every" + "____________")],
[["wig",113], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my" + "____________")],
[["wig",114], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my" + "____________")],
[["wig",115], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my head would uh felt very exposed very uh very uncomfortable. And I thought" + "____________")],
[["wig",116], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my head would uh felt very exposed very uh very uncomfortable. And I thought people were looking at me. And they would ask me" + "____________")],
[["wig",117], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my head would uh felt very exposed very uh very uncomfortable. And I thought people were looking at me. And they would ask me questions like you know “how I was doing” and and and and and uh how my" + "____________")],
[["wig",118], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my head would uh felt very exposed very uh very uncomfortable. And I thought people were looking at me. And they would ask me questions like you know “how I was doing” and and and and and uh how my cancer was going and how my" + "____________")],
[["wig",119], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my head would uh felt very exposed very uh very uncomfortable. And I thought people were looking at me. And they would ask me questions like you know “how I was doing” and and and and and uh how my cancer was going and how my chemo was going. And I felt I didn’t like it. And I didn’t like when they looked at me as if they were about to cry. And so I thought, “well maybe I’ll go to the " + "____________")],
[["wig",120], "AY_Form", blank("My head seemed to be saying to me, “hello sickie, hello sick person with cancer”. And every time I went out in my in my scarfs my uh.. my my my head would uh felt very exposed very uh very uncomfortable. And I thought people were looking at me. And they would ask me questions like you know “how I was doing” and and and and and uh how my cancer was going and how my chemo was going. And I felt I didn’t like it. And I didn’t like when they looked at me as if they were about to cry. And so I thought, “well maybe I’ll go to the store and get a " + "____________")],

// Clear previous discourse 

[["wig",121], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig" + "____________")],
[["wig",122], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus" + "____________")],
[["wig",123], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called" + "____________")],
[["wig",124], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and" + "____________")],
[["wig",125], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and pieces”. Haha it was. And uh my wig" + "____________")],
[["wig",126], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and pieces”. Haha it was. And uh my wig fitter was a French" + "____________")],
[["wig",127], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and pieces”. Haha it was. And uh my wig fitter was a French man and he said, “What do you want?” And I said “I want a" + "____________")],
[["wig",128], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and pieces”. Haha it was. And uh my wig fitter was a French man and he said, “What do you want?” And I said “I want a wig” and he said “what kind of" + "____________")],
[["wig",129], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and pieces”. Haha it was. And uh my wig fitter was a French man and he said, “What do you want?” And I said “I want a wig” and he said “what kind of hair?” and I said “I don’t know, how many" + "____________")],
[["wig",130], "AY_Form", blank("And so I thought, “well maybe I’ll go to the store and get a wig.” So I did. I went to a wig store right near Columbus Avenue and it was called “bits and pieces”. Haha it was. And uh my wig fitter was a French man and he said, “What do you want?” And I said “I want a wig” and he said “what kind of hair?” and I said “I don’t know, how many kinds do you have?” And he said, well, he explained to me that they had synthetic" + "____________")],

// Clear previous discourse 

[["wig",131], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had" + "____________")],
[["wig",132], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the" + "____________")],
[["wig",133], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian" + "____________")],
[["wig",134], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had " + "____________")],
[["wig",135], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had wigs made from the" + "____________")],
[["wig",136], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had wigs made from the hair of Caucasian European" + "____________")],
[["wig",137], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had wigs made from the hair of Caucasian European women. Now the synthetic" + "____________")],
[["wig",138], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had wigs made from the hair of Caucasian European women. Now the synthetic wigs were the cheapest, and the Indian" + "____________")],
[["wig",139], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had wigs made from the hair of Caucasian European women. Now the synthetic wigs were the cheapest, and the Indian hair" + "____________")],
[["wig",140], "AY_Form", blank("And he said, well, he explained to me that they had synthetic wigs, they had wigs made from the hair of Indian women, and they had wigs made from the hair of Caucasian European women. Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle" + "____________")],

// Clear previous discourse 

[["wig",141], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900" + "____________")],
[["wig",142], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the" + "____________")],
[["wig",143], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the" + "____________")],
[["wig",144], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European" + "____________")],
[["wig",145], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European women were 4 to 5 thousand" + "____________")],
[["wig",146], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European women were 4 to 5 thousand dollars. Now I thought “you know even if my insurance" + "____________")],
[["wig",147], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European women were 4 to 5 thousand dollars. Now I thought “you know even if my insurance company paid for this it’s just obscene to spend this kind of" + "____________")],
[["wig",148], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European women were 4 to 5 thousand dollars. Now I thought “you know even if my insurance company paid for this it’s just obscene to spend this kind of money on a" + "____________")],
[["wig",149], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European women were 4 to 5 thousand dollars. Now I thought “you know even if my insurance company paid for this it’s just obscene to spend this kind of money on a wig. And and why is the" + "____________")],
[["wig",150], "AY_Form", blank("Now the synthetic wigs were the cheapest, and the Indian hair wigs were in the middle range. They were about 800 to 900 dollars. And then the wigs made from the hair of Caucasian European women were 4 to 5 thousand dollars. Now I thought “you know even if my insurance company paid for this it’s just obscene to spend this kind of money on a wig. And and why is the hair of Caucasian European" + "____________")],

// Clear previous discourse 

[["wig",151], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the" + "____________")],
[["wig",152], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian" + "____________")],
[["wig",153], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian" + "____________")],
[["wig",154], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s" + "____________")],
[["wig",155], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s hair even though I felt very uncomfortable um knowing that they’d been paid 22" + "____________")],
[["wig",156], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s hair even though I felt very uncomfortable um knowing that they’d been paid 22 cents to have it shorn from their" + "____________")],
[["wig",157], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s hair even though I felt very uncomfortable um knowing that they’d been paid 22 cents to have it shorn from their heads. So I uh I took my" + "____________")],
[["wig",158], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s hair even though I felt very uncomfortable um knowing that they’d been paid 22 cents to have it shorn from their heads. So I uh I took my wig" + "____________")],
[["wig",159], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s hair even though I felt very uncomfortable um knowing that they’d been paid 22 cents to have it shorn from their heads. So I uh I took my wig home. The wig" + "____________")],
[["wig",160], "AY_Form", blank("And and why is the hair of Caucasian European women four times as expensive as the hair of Indian women?! It was so racist! So I um I decided to go with the Indian women’s hair even though I felt very uncomfortable um knowing that they’d been paid 22 cents to have it shorn from their heads. So I uh I took my wig home. The wig fitter put it in a in a in a in a big" + "____________")],

// Clear previous discourse 

[["wig",161], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper" + "____________")],
[["wig",162], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the" + "____________")],
[["wig",163], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper" + "____________")],
[["wig",164], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam" + "____________")],
[["wig",165], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam head with the" + "____________")],
[["wig",166], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam head with the wig on it. And uh I took the" + "____________")],
[["wig",167], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam head with the wig on it. And uh I took the bag " + "____________")],
[["wig",168], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam head with the wig on it. And uh I took the bag home. And when I got" + "____________")],
[["wig",169], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam head with the wig on it. And uh I took the bag home. And when I got home I took the Styrofoam" + "____________")],
[["wig",170], "AY_Form", blank("The wig fitter put it in a in a in a in a big paper bag and inside the paper bag was a Styrofoam head with the wig on it. And uh I took the bag home. And when I got home I took the Styrofoam head with the" + "____________")],

// Clear previous discourse 

[["wig",171], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my" + "____________")],
[["wig",172], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the" + "____________")],
[["wig",173], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my" + "____________")],
[["wig",174], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my" + "____________")],
[["wig",175], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my wig. And it was very unsettling to look at it over there. I sometimes I felt like my" + "____________")],
[["wig",176], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my wig. And it was very unsettling to look at it over there. I sometimes I felt like my wig" + "____________")],
[["wig",177], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my wig. And it was very unsettling to look at it over there. I sometimes I felt like my wig head, which was so well groomed, was uh condescending to me. So… I’m feeling uh very bad about this" + "____________")],
[["wig",178], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my wig. And it was very unsettling to look at it over there. I sometimes I felt like my wig head, which was so well groomed, was uh condescending to me. So… I’m feeling uh very bad about this scarf look meanwhile that I … I sort of been adopting. But I can’t quite bring myself to put the" + "____________")],
[["wig",179], "AY_Form", blank("And when I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my wig. And it was very unsettling to look at it over there. I sometimes I felt like my wig head, which was so well groomed, was uh condescending to me. So… I’m feeling uh very bad about this scarf look meanwhile that I … I sort of been adopting. But I can’t quite bring myself to put the wig on it seems like a lot of a lot of" + "____________")],
[["wig",180], "AY_Form", blank("And when 8I got home I took the Styrofoam head with the wig on it and I put it in a corner of my bedroom just to wait until the occasion that might possibly happen when I might want to wear my wig… might consider wearing my wig. And it was very unsettling to look at it over there. I sometimes I felt like my wig head, which was so well groomed, was uh condescending to me. So… I’m feeling uh very bad about this scarf look meanwhile that I … I sort of been adopting. But I can’t quite bring myself to put the wig on it seems like a lot of a lot of trouble. But then I just start to feel worse and worse about my whole" + "____________")],

// Clear previous discourse 

[["wig",181], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um" + "____________")],
[["wig",182], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these" + "____________")],
[["wig",183], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these" + "____________")],
[["wig",184], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady" + "____________")],
[["wig",185], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady pirate. Or um like one of those very very ancient old" + "____________")],
[["wig",186], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady pirate. Or um like one of those very very ancient old ladies who’s pushing her grocery" + "____________")],
[["wig",187], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady pirate. Or um like one of those very very ancient old ladies who’s pushing her grocery cart down Broadway. And uh but I still can’t quite bring myself to wear the" + "____________")],
[["wig",188], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady pirate. Or um like one of those very very ancient old ladies who’s pushing her grocery cart down Broadway. And uh but I still can’t quite bring myself to wear the wig. It seems like a lot of" + "____________")],
[["wig",189], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady pirate. Or um like one of those very very ancient old ladies who’s pushing her grocery cart down Broadway. And uh but I still can’t quite bring myself to wear the wig. It seems like a lot of trouble. And um and then one" + "____________")],
[["wig",190], "AY_Form", blank("But then I just start to feel worse and worse about my whole look. My whole um uniform of these scarfs that I’m wearing and these bandanas. And I start thinking I look like a lady pirate. Or um like one of those very very ancient old ladies who’s pushing her grocery cart down Broadway. And uh but I still can’t quite bring myself to wear the wig. It seems like a lot of trouble. And um and then one day I realize that my" + "____________")],

// Clear previous discourse 

[["wig",191], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some" + "____________")],
[["wig",192], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no" + "____________")],
[["wig",193], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My" + "____________")],
[["wig",194], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my" + "____________")],
[["wig",195], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my head but my" + "____________")],
[["wig",196], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my head but my eyebrows were part of my" + "____________")],
[["wig",197], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my head but my eyebrows were part of my face. I look like a big" + "____________")],
[["wig",198], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my head but my eyebrows were part of my face. I look like a big baby. And every" + "____________")],
[["wig",199], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my head but my eyebrows were part of my face. I look like a big baby. And every time I look in the" + "____________")],
[["wig",200], "AY_Form", blank("And um and then one day I realize that my eyebrows have fallen out. And for some reason this is completely unexpected by me. And makes me feel surprisingly sorry for myself. Having no eyebrows makes me feel very naked, very vulnerable, very exposed. My hair was part of my head but my eyebrows were part of my face. I look like a big baby. And every time I look in the mirror and I see the" + "____________")],

// Clear previous discourse 

[["wig",201], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a" + "____________")],
[["wig",202], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the" + "____________")],
[["wig",203], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of" + "____________")],
[["wig",204], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my" + "____________")],
[["wig",205], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my disease even though I’ve set it all up. And uh I’m tired of them looking at me like I’m about to cry. I’m ready for my" + "____________")],
[["wig",206], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my disease even though I’ve set it all up. And uh I’m tired of them looking at me like I’m about to cry. I’m ready for my wig. Well I’m ready to try thinking about wearing my" + "____________")],
[["wig",207], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my disease even though I’ve set it all up. And uh I’m tired of them looking at me like I’m about to cry. I’m ready for my wig. Well I’m ready to try thinking about wearing my wig. So it turns out that my" + "____________")],
[["wig",208], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my disease even though I’ve set it all up. And uh I’m tired of them looking at me like I’m about to cry. I’m ready for my wig. Well I’m ready to try thinking about wearing my wig. So it turns out that my friend Martha um her" + "____________")],
[["wig",209], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my disease even though I’ve set it all up. And uh I’m tired of them looking at me like I’m about to cry. I’m ready for my wig. Well I’m ready to try thinking about wearing my wig. So it turns out that my friend Martha um her daughter Anna is about to graduate from the University of Chicago. And I decide you know this might be the perfect" + "____________")],
[["wig",210], "AY_Form", blank("And every time I look in the mirror and I see the baby I feel so bad for her that I wanna cry. And I decide I need more of a buffer between me and the rest of the world. I’m tired of people asking me about my disease even though I’ve set it all up. And uh I’m tired of them looking at me like I’m about to cry. I’m ready for my wig. Well I’m ready to try thinking about wearing my wig. So it turns out that my friend Martha um her daughter Anna is about to graduate from the University of Chicago. And I decide you know this might be the perfect occasion to wear my" + "____________")],

// Clear previous discourse 

[["wig",211], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up" + "____________")],
[["wig",212], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big" + "____________")],
[["wig",213], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my" + "____________")],
[["wig",214], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the" + "____________")],
[["wig",215], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the morning of the" + "____________")],
[["wig",216], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the morning of the ceremony I get up and I put my" + "____________")],
[["wig",217], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the morning of the ceremony I get up and I put my wig on my head. I first I comb it and brush it. And then I fit it carefully to my" + "____________")],
[["wig",218], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the morning of the ceremony I get up and I put my wig on my head. I first I comb it and brush it. And then I fit it carefully to my head. And I start walking toward the" + "____________")],
[["wig",219], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the morning of the ceremony I get up and I put my wig on my head. I first I comb it and brush it. And then I fit it carefully to my head. And I start walking toward the graduation along with these you know" + "____________")],
[["wig",220], "AY_Form", blank("And I decide you know this might be the perfect occasion to wear my wig. It’s a nice grown up occasion; it’s a big event. And so I go to Chicago and I bring my wig. And the morning of the ceremony I get up and I put my wig on my head. I first I comb it and brush it. And then I fit it carefully to my head. And I start walking toward the graduation along with these you know throngs of other" + "____________")],

// Clear previous discourse 

[["wig",221], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and" + "____________")],
[["wig",222], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and" + "____________")],
[["wig",223], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my" + "____________")],
[["wig",224], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these" + "____________")],
[["wig",225], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these weeks. First in my" + "____________")],
[["wig",226], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these weeks. First in my bedroom maybe and then around my" + "____________")],
[["wig",227], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these weeks. First in my bedroom maybe and then around my neighborhood cause every" + "____________")],
[["wig",228], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these weeks. First in my bedroom maybe and then around my neighborhood cause every time I look in a" + "____________")],
[["wig",229], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these weeks. First in my bedroom maybe and then around my neighborhood cause every time I look in a store" + "____________")],
[["wig",230], "AY_Form", blank("And I start walking toward the graduation along with these you know throngs of other parents and grandparents and friends. And right away as soon as I start walking I know that I should’ve been practicing wearing my wig all these weeks. First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in" + "____________")],

// Clear previous discourse 

[["wig",231], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a" + "____________")],
[["wig",232], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the" + "____________")],
[["wig",233], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the" + "____________")],
[["wig",234], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my" + "____________")],
[["wig",235], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my wig. And I’m very self-conscious about the" + "____________")],
[["wig",236], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my wig. And I’m very self-conscious about the wig itself. I keep tugging at it and fuzzing with it and imaging there are these sort of" + "____________")],
[["wig",237], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my wig. And I’m very self-conscious about the wig itself. I keep tugging at it and fuzzing with it and imaging there are these sort of strands of" + "____________")],
[["wig",238], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my wig. And I’m very self-conscious about the wig itself. I keep tugging at it and fuzzing with it and imaging there are these sort of strands of hair coming out even though there aren’t. This" + "____________")],
[["wig",239], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my wig. And I’m very self-conscious about the wig itself. I keep tugging at it and fuzzing with it and imaging there are these sort of strands of hair coming out even though there aren’t. This wig is just a" + "____________")],
[["wig",240], "AY_Form", blank("First in my bedroom maybe and then around my neighborhood cause every time I look in a store window I recognize myself but I look like I’m in disguise. I feel like I’ve done something really bad like robbed a bank. And now I’m trying to just kind of lose myself in the crowd by going incognito in my wig. And I’m very self-conscious about the wig itself. I keep tugging at it and fuzzing with it and imaging there are these sort of strands of hair coming out even though there aren’t. This wig is just a stranger to me. And I’m uncomfortable having it in my personal" + "____________")],

// Clear previous discourse 

[["wig",241], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the" + "____________")],
[["wig",242], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the" + "____________")],
[["wig",243], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the" + "____________")],
[["wig",244], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling" + "____________")],
[["wig",245], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling sunhats. And this is a very smart" + "____________")],
[["wig",246], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling sunhats. And this is a very smart person. They’ve realized that some of us" + "____________")],
[["wig",247], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling sunhats. And this is a very smart person. They’ve realized that some of us women there haven’t put it together that we’re gonna be spending about four" + "____________")],
[["wig",248], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling sunhats. And this is a very smart person. They’ve realized that some of us women there haven’t put it together that we’re gonna be spending about four hours in the scorching Chicago" + "____________")],
[["wig",249], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling sunhats. And this is a very smart person. They’ve realized that some of us women there haven’t put it together that we’re gonna be spending about four hours in the scorching Chicago sun and that we might not wanna get sunburnt. So I buy one of the" + "____________")],
[["wig",250], "AY_Form", blank("And I’m uncomfortable having it in my personal space. Now someone at the graduation at the ceremony before the ceremony starts is selling sunhats. And this is a very smart person. They’ve realized that some of us women there haven’t put it together that we’re gonna be spending about four hours in the scorching Chicago sun and that we might not wanna get sunburnt. So I buy one of the hats. Just in part so I wont get sunburnt but really cause I think the" + "____________")],

// Clear previous discourse 

[["wig",251], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my" + "____________")],
[["wig",252], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the" + "____________")],
[["wig",253], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my" + "____________")],
[["wig",254], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my" + "____________")],
[["wig",255], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my place in a folding" + "____________")],
[["wig",256], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my place in a folding chair among this" + "____________")],
[["wig",257], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my place in a folding chair among this ocean of folding" + "____________")],
[["wig",258], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my place in a folding chair among this ocean of folding chairs and the" + "____________")],
[["wig",259], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my place in a folding chair among this ocean of folding chairs and the ceremony starts. And um it goes on and it goes on and on and by the second" + "____________")],
[["wig",260], "AY_Form", blank("Just in part so I wont get sunburnt but really cause I think the hat is gonna cover up my wig and make me feel much less self conscious. So I put the hat on over my wig. And I take my place in a folding chair among this ocean of folding chairs and the ceremony starts. And um it goes on and it goes on and on and by the second hour or so uh my" + "____________")],

// Clear previous discourse 

[["wig",261], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my" + "____________")],
[["wig",262], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my" + "____________")],
[["wig",263], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little" + "____________")],
[["wig",264], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of" + "____________")],
[["wig",265], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of sweat are coming down from underneath my" + "____________")],
[["wig",266], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of sweat are coming down from underneath my wig onto my" + "____________")],
[["wig",267], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of sweat are coming down from underneath my wig onto my neck. And that makes the" + "____________")],
[["wig",268], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of sweat are coming down from underneath my wig onto my neck. And that makes the wig really itch. And the" + "____________")],
[["wig",269], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of sweat are coming down from underneath my wig onto my neck. And that makes the wig really itch. And the wig itself is so hot and heavy on my" + "____________")],
[["wig",270], "AY_Form", blank("And um it goes on and it goes on and on and by the second hour or so uh my head is just baking um under my wig and my hat and it feels really more like it’s just broiling in there. And um these little rivulets of sweat are coming down from underneath my wig onto my neck. And that makes the wig really itch. And the wig itself is so hot and heavy on my head. It feels like I’m wearing my" + "____________")],

// Clear previous discourse 

[["wig",271], "AY_Form", blank("It feels like I’m wearing my cat… um on my" + "____________")],
[["wig",272], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my" + "____________")],
[["wig",273], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my" + "____________")],
[["wig",274], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my" + "____________")],
[["wig",275], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my hat. And I think," + "____________")],
[["wig",276], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my hat. And I think “God almighty if I could just take off my" + "____________")],
[["wig",277], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my hat. And I think “God almighty if I could just take off my hat you know maybe my" + "____________")],
[["wig",278], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my hat. And I think “God almighty if I could just take off my hat you know maybe my wig could just breathe a little!” So I whip off my" + "____________")],
[["wig",279], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my hat. And I think “God almighty if I could just take off my hat you know maybe my wig could just breathe a little!” So I whip off my hat and you know in one of those nearly free" + "____________")],
[["wig",280], "AY_Form", blank("It feels like I’m wearing my cat… um on my head. And I feel like my head is um suffocating in there it is just so so very very hot under my wig and my hat. And I think “God almighty if I could just take off my hat you know maybe my wig could just breathe a little!” So I whip off my hat and you know in one of those nearly free fall, slow" + "____________")],

// Clear previous discourse

[["wig",281], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall, slow motion" + "____________")],
[["wig",282], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall, slow motion moments, one of those" + "____________")],
[["wig",283], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same" + "____________")],
[["wig",284], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a" + "____________")],
[["wig",285], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a dream and like the realest" + "____________")],
[["wig",286], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a dream and like the realest thing that is ever happened to you. My" + "____________")],
[["wig",287], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a dream and like the realest thing that is ever happened to you. My wig comes off with my" + "____________")],
[["wig",288], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a dream and like the realest thing that is ever happened to you. My wig comes off with my hat. And it is so embarrassing that I can’t even be embarrassed because" + "____________")],
[["wig",289], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a dream and like the realest thing that is ever happened to you. My wig comes off with my hat. And it is so embarrassing that I can’t even be embarrassed because embarrassment can’t even cover it. I mean I’ve lost everything. My" + "____________")],
[["wig",290], "AY_Form", blank("So I whip off my hat and you know in one of those nearly free fall slow motion moments, one of those moments that is just at the same time like a dream and like the realest thing that is ever happened to you. My wig comes off with my hat. And it is so embarrassing that I can’t even be embarrassed because embarrassment can’t even cover it. I mean I’ve lost everything. My hat! My" + "____________")],

// Clear previous discourse 

[["wig",291], "AY_Form", blank("My wig! My" + "____________")],
[["wig",292], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this" + "____________")],
[["wig",293], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a Great Lucy" + "____________")],
[["wig",294], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my" + "____________")],
[["wig",295], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my wig and my" + "____________")],
[["wig",296], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my wig and my hat and I put them back on my" + "____________")],
[["wig",297], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my wig and my hat and I put them back on my head, really for" + "____________")],
[["wig",298], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my wig and my hat and I put them back on my head, really for decorum" + "____________")],
[["wig",299], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my wig and my hat and I put them back on my head, really for decorum sake you know. I feel so bad for the" + "____________")],
[["wig",300], "AY_Form", blank("My wig! My hair! And I feel strangely free. You know. It seems funny. And I start to laugh because it’s so funny that I’ve gone through all this trouble only to end up like this. I feel like I’m in a great Lucy episode. But I take my wig and my hat and I put them back on my head, really for decorum sake you know. I feel so bad for the people behind me I can’t even look at them. And I uh sit through the rest of the" + "____________")],

// Clear previous discourse 

[["wig",301], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my" + "____________")],
[["wig",302], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a" + "____________")],
[["wig",303], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic" + "____________")],
[["wig",304], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my" + "____________")],
[["wig",305], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my dresser" + "____________")],
[["wig",306], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my dresser drawers so I won’t ever have to look at it. And I go back to wearing my" + "____________")],
[["wig",307], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my dresser drawers so I won’t ever have to look at it. And I go back to wearing my scarfs and" + "____________")],
[["wig",308], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my dresser drawers so I won’t ever have to look at it. And I go back to wearing my scarfs and bandanas until my" + "____________")],
[["wig",309], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my dresser drawers so I won’t ever have to look at it. And I go back to wearing my scarfs and bandanas until my hair grows back in. Which it does, by the way. It’s just the same old " + "____________")],
[["wig",310], "AY_Form", blank("And I uh sit through the rest of the ceremony and then I go back to New York. And I take my uh take my wig and I put it in a plastic bag. And then I put it way in the back of one of my dresser drawers so I won’t ever have to look at it. And I go back to wearing my scarfs and bandanas until my hair grows back in. Which it does, by the way. It’s just the same old hair. But uh for the first" + "____________")],

// Clear previous discourse 

[["wig",311], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths" + "____________")],
[["wig",312], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two" + "____________")],
[["wig",313], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal" + "____________")],
[["wig",314], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our " + "____________")],
[["wig",315], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our children. And eating the delicious" + "____________")],
[["wig",316], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our children. And eating the delicious food that she cooks at her" + "____________")],
[["wig",317], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our children. And eating the delicious food that she cooks at her house and telling our" + "____________")],
[["wig",318], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our children. And eating the delicious food that she cooks at her house and telling our cancer" + "____________")],
[["wig",319], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our children. And eating the delicious food that she cooks at her house and telling our cancer stories. She really um really likes my" + "____________")],
[["wig",320], "AY_Form", blank("But uh for the first time I’m kinda glad to see it. And um and Ruths hair grows back too. And for two years we have just a lot of fun doing the normal things we like to do. Like worrying endlessly about our children. And eating the delicious food that she cooks at her house and telling our cancer stories. She really um really likes my wig" + "____________")],

// Clear previous discourse 

[["wig",321], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this" + "____________")],
[["wig",322], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have" + "____________")],
[["wig",323], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when" + "____________")],
[["wig",324], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring" + "____________")],
[["wig",325], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring story of their" + "____________")],
[["wig",326], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring story of their aunt or their" + "____________")],
[["wig",327], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring story of their aunt or their grandmother who had terrible" + "____________")],
[["wig",328], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring story of their aunt or their grandmother who had terrible cancer and then went into" + "____________")],
[["wig",329], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring story of their aunt or their grandmother who had terrible cancer and then went into remission. And she went out and got her" + "____________")],
[["wig",330], "AY_Form", blank("She really um really likes my wig story. And um I love it when she does this version of something that happens a lot when you have cancer although I really don’t know why. It’s when people come up to you and tell you an inspiring story of their aunt or their grandmother who had terrible cancer and then went into remission. And she went out and got her PhD or she took up" + "____________")],

// Clear previous discourse 

[["wig",331], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new" + "____________")],
[["wig",332], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the" + "____________")],
[["wig",333], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these" + "____________")],
[["wig",334], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the" + "____________")],
[["wig",335], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the people “how is she doing?” And they always say “Oh... she died.” And I say to Ruth, “Do it again Ruth! Tell the inspiring" + "____________")],
[["wig",336], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the people “how is she doing?” And they always say “Oh... she died.” And I say to Ruth, “Do it again Ruth! Tell the inspiring people" + "____________")],
[["wig",337], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the people “how is she doing?” And they always say “Oh... she died.” And I say to Ruth, “Do it again Ruth! Tell the inspiring people story again!” We crack each other up with our" + "____________")],
[["wig",338], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the people “how is she doing?” And they always say “Oh... she died.” And I say to Ruth, “Do it again Ruth! Tell the inspiring people story again!” We crack each other up with our stories. And then um and then Ruth’s" + "____________")],
[["wig",339], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the people “how is she doing?” And they always say “Oh... she died.” And I say to Ruth, “Do it again Ruth! Tell the inspiring people story again!” We crack each other up with our stories. And then um and then Ruth’s cancer comes back. And after a long" + "____________")],
[["wig",340], "AY_Form", blank("And she went out and got her PhD or she took up parasailing and she had a whole new life. And at the end of these stories you always ask the people “how is she doing?” And they always say “Oh... she died.” And I say to Ruth, “Do it again Ruth! Tell the inspiring people story again!” We crack each other up with our stories. And then um and then Ruth’s cancer comes back. And after a long time she dies. And I miss her so much. And in the" + "____________")],

// Clear previous discourse 

[["wig",341], "AY_Form", blank("And in the light of this" + "____________")],
[["wig",342], "AY_Form", blank("And in the light of this loss and other" + "____________")],
[["wig",343], "AY_Form", blank("And in the light of this loss and other losses, you know one of my" + "____________")],
[["wig",344], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies," + "____________")],
[["wig",345], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies, women I meet in various" + "____________")],
[["wig",346], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies, women I meet in various doctors waiting" + "____________")],
[["wig",347], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies, women I meet in various doctors waiting rooms die. Getting rid of my" + "____________")],
[["wig",348], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies, women I meet in various doctors waiting rooms die. Getting rid of my wig seems so cocky. You know who am I to say that I’m done with my" + "____________")],
[["wig",349], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies, women I meet in various doctors waiting rooms die. Getting rid of my wig seems so cocky. You know who am I to say that I’m done with my disease? Who am I to say that there’s never gonna be an" + "____________")],
[["wig",350], "AY_Form", blank("And in the light of this loss and other losses, you know one of my editors dies, women I meet in various doctors waiting rooms die. Getting rid of my wig seems so cocky. You know who am I to say that I’m done with my disease? Who am I to say that there’s never gonna be an occasion where I might consider wearing that" + "____________")],

// Clear previous discourse 

[["wig",351], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy" + "____________")],
[["wig",352], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine" + "____________")],
[["wig",353], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine articles about how to de-clutter your" + "____________")],
[["wig",354], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that" + "____________")],
[["wig",355], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that bridesmaids" + "____________")],
[["wig",356], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of these very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that bridesmaids dress again or that pair of" + "____________")],
[["wig",357], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of these very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that bridesmaids dress again or that pair of culottes. And if you answer no you have to throw it away. And I think to myself realistically… realistically I might need " + "____________")],
[["wig",358], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that bridesmaids dress again or that pair of culottes. And if you answer no you have to throw it away. And I think to myself realistically… realistically I might need chemo" + "____________")],
[["wig",359], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that bridesmaids dress again or that pair of culottes. And if you answer no you have to throw it away. And I think to myself realistically… realistically I might need chemo drugs again. And I might lose my" + "____________")],
[["wig",360], "AY_Form", blank("Who am I to say that there’s never gonna be an occasion where I might consider wearing that wig again? And then I read one of those very bossy magazine articles about how to de-clutter your closet. And uh and how you must ask yourself realistically if you are ever ever gonna wear that bridesmaids dress again or that pair of culottes. And if you answer no you have to throw it away. And I think to myself realistically… realistically I might need chemo drugs again. And I might lose my hair again. But I would never ever wear that stupid" + "____________")],

// Clear previous discourse 

[["wig",361], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid" + "____________")],
[["wig",362], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid scarfs you know. Better to let" + "____________")],
[["wig",363], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid scarfs you know. Better to let people ask me" + "____________")],
[["wig",364], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid scarfs you know. Better to let people ask me questions. Better to let" + "____________")],
[["wig",365], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid scarfs you know. Better to let people ask me questions. Better to let people look at me like they’re about to cry. Better to let the other" + "____________")],
[["wig",366], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid scarfs you know. Better to let people ask me questions. Better to let people look at me like they’re about to cry. Better to let the other women out there walking around with no" + "____________")],
[["wig",367], "AY_Form", blank("But I would never ever wear that stupid wig again. Better to go back to the stupid scarfs you know. Better to let people ask me questions. Better to let people look at me like they’re about to cry. Better to let the other women out there walking around with no hair see that I’m one of them. So I threw it away." + "____________")],


// Dont touch below this :)
                                     
                  ];

// functions for blanking.

function blank(a, b) {
   var sentence = b ? b : a;
   var n = b ? a : null;

   var seq = [""];
   var inBlank = false;
   for (var i = 0; i < sentence.length; ++i) {
       var c = sentence.charAt(i)
       if (inBlank) {
           if (c == '_')
               (seq[seq.length-1])++;
           else {
               seq.push(c);
               inBlank = true;
           }
       }
       else {
           if (c != '_')
               seq[seq.length-1] += c
           else {
               seq.push(1);
               inBlank = true;
           }
       }
   }

   var ihtml = "";
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           var input = " <input type=text name=blank-" + bcount + " size=" + (n ? n : seq[i]) + "></input> ";
           ihtml += input;
       }
       else {
           ihtml += $("<div>").text(seq[i])[0].innerHTML;
       }
   }

   var e = "<p>";
   var validators = { };
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           e += "<label class=error for=blank-" + bcount + "></label>";
           validators[blank- + bcount] = function (s) { if (s && ! s.match(/^\s*$/)) return true; else return "You must fill in the blank."; }
       }
   }
   e += "</p>"

   return {
       html: "<p>" + ihtml + "</p>" + e,
       validators: validators
   };
}