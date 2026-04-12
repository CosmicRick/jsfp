const lines = [
    'Ho Manne Saambh-Saambh Rakhe Tere Jhanjharan Ke Jode',
    'Meri Gail Ro-Ro Ye Bhi Chhori Baawle Se Hore',
    'Manne Aaye Jaave Khayal Tere Khaye Jaave Khayal Tere',
    'Jeene Koni Deti Haaye Bairi Tanhayi ',
    'Geeta Mein Gaayi Kade Chhaati Ke Lagayi Manne',
    'Jit Bhi Gaya Re Teri Yaad Khadi Paayi Manne',
    ' Saambh Saambh Rakhi Bahut Chhaati Ke Lagayi Manne',
    ' Jit Bhi Gaya Re Teri Yaad Khadi Paayi Manne'
]
let i = 0;
function Lyrics(){
    if(i<lines.length){
        console.log(lines[i])
        i++;
        setTimeout(Lyrics, 1000)
    }
}
Lyrics();