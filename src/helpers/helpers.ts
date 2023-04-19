export const playAudio = (sound:string) => {
    const audio = new Audio(sound)
    return audio.play()
 };

export const checkTab =(activeTab:string,setState:(value: React.SetStateAction<number>) => void, value1:number, value2:number, value3:number)=> {
    if(activeTab=='pomodoro') {
        setState(value1*60)
    }
    if(activeTab=='short break') {
        setState(value2*60)
    }
    if(activeTab=='long break') {
        setState(value3*60)
    }
}