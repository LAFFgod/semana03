function Sprite(exemplo){
    var{
        x=10,
        y=100,
        w=10,
        vx=0,
        vy=0,
    } = exemplo;

    this.x=x;
    this.y=y;

    this.w=w;

    this.vx=vx;
    this.vy=vy;

}
Sprite.prototype = new Sprite ({});
Sprite.constructor = Sprite;

Sprite.prototype.desenhar = function(ctx){
    ctx.fillStyle="blue";
    ctx.fillStroke= "black";
    ctx.fillRect(this.x,this.y,this.w,this.w);
}
Sprite.prototype.mover=function(dt){
    this.x=this.x+this.vx*dt;
    this.y=this.y+this.vy*dt;
}

Sprite.prototype.colidiuCom=function(alvo){
    if(alvo.x+alvo.w<this.x)
        return false;
    if(alvo.x>this.x+this.w)
        return false;
    if(alvo.y+alvo.w<this.y)
        return false;
    if(alvo.y>this.y+this.w)
        return false;   
    return true;

}