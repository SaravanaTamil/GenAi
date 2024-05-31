 Const socialIconButtons = document.getElementsByClassName(“social-icon”);
Function postToSocialMedia(classList) {
 Const content = `Check out my cool generative AI Project
\n${window.location.href.toString()}`;
 If (classList.contains(“twitter”)) {
 Const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
 Content
 )}`;
 Window.open(url);
 } else if (classList.contains(“linkedin”)) {
 Const url = `https://www.linkedin.com/share?text=${encodeURIComponent(
 Content
 )}`;
 Window.open(url);
 } else if (classList.contains(“whatsapp”)) {

Window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(conten
t)}`);
 }
}
Const addEventListenersToSocialIconButton = () => {
 For (let I = 0; I < socialIconButtons.length; i++) {
 socialIconButtons[i].addEventListener(“click”, () =>
 postToSocialMedia(socialIconButtons[i].classList)
 );
 }
};
addEventListenersToSocialIconButton();
30
const skillIcon = document.getElementsByClassName(“tooltip”);
const addEventListenersToSkillIcon = () => {
 for (let I = 0; I < skillIcon.length; i++) {
 skillIcon[i].addEventListener(“click”, € => {
 console.log(e.target)
 updateDescription(e.target.id);
 });
 }
};
addEventListenersToSkillIcon();
const descriptionDiv = document.getElementsByClassName(“about-section”);
const updateDescription = (id) => {
 let description = “”;
 switch (id) {
 case “googleColab”:
 description = “Google Colab: User-friendly platform for code writing,
execution, and sharing. Beloved by AI experts, students, developers, and researchers
for data analysis, ML, and AI exploration.”;
 break;
 case “gradio”:
 description = “Gradio: A user-friendly tool that allows to create and share
interactive Al Apps without extensive Coding Knowledge.”;
 break;
 case “openAi”:
 description = “OpenAI: An AI-based chat service powered by Open AI’s
language model. OpenAI APIs offer access to advanced language models and AI
capabilities. Integrate NLP, text generation, and more into your apps to revolutionize
communication and problem-solving. “;
 break;
 case “playHt”:
 description = “PlayHT: PlayHT is a platform that allows you to clone voices
using artificial intelligence. The platform uses a deep learning model to train a voice
clone that sounds almost exactly like the original voice.”;
 break;
 case “huggingFace”:
 description = “HuggingFace: The ultimate destination for building, training,
and deploying cutting-edge machine learning models! Revolutionize your AI projects
with state-of-the-art NLP and more!”;
 break;
 case “langChain”:
30
 description = “LangChain: Seamlessly combine Large Language Models
(LLMs) with external computation/data. Build chatbots, analyze data effortlessly.
Open source for contributions.”;
 break;
 default:
 description = “Description of the selected icon will appear here.”;
 }
 For (let I = 0; I < descriptionDiv.length; i++) {

 descriptionDiv[i].textContent = description;
 }
};
updateDescription(“googleColab”);
