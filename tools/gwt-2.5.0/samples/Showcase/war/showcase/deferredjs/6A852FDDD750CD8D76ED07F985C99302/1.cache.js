function ZMb(a){var b,c;b=Dlb(a.b.me(fbd),149);if(b==null){c=tlb(VHb,u2c,1,[gbd,hbd,ibd,jbd]);a.b.oe(fbd,c);return c}else{return b}}
function $Mb(a){var b,c;b=Dlb(a.b.me(kbd),149);if(b==null){c=tlb(VHb,u2c,1,[lbd,mbd,nbd,obd,pbd,qbd]);a.b.oe(kbd,c);return c}else{return b}}
function F8b(a){var b,c,d,e,f,g,i;i=new iMc;fMc(i,new Pwc('<b>Select your favorite color:<\/b>'));c=ZMb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new eGc(V7c,b);Esc(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,aj(e,ij(e.db)+i8c,true));fMc(i,e)}fMc(i,new Pwc('<br><b>Select your favorite sport:<\/b>'));g=$Mb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new eGc('sport',f);Esc(e,'cwRadioButton-sport-'+GUc(f,_3c,P4c));d==2&&Fsc(e,(bTc(),bTc(),aTc));fMc(i,e)}return i}
var fbd='cwRadioButtonColors',kbd='cwRadioButtonSports';XIb(874,1,h3c);_.qc=function L8b(){ALb(this.c,F8b(this.b))};W3c(In)(1);