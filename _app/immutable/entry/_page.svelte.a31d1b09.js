import{S as Ua,i as ka,s as Ba,k as fe,l as pe,m as xe,h as he,n as ae,b as Fs,H as Gn,o as Nl,w as vi,q as We,a as Qe,y as no,r as Xe,c as et,z as io,J as bf,G as j,A as ro,K as or,g as so,d as ao,B as oo,L as Mf,M as Sf,N as wf}from"../chunks/index.3a2bf0e2.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="149",Tf=0,Uc=1,Ef=2,kh=1,Af=2,fs=3,oi=0,un=1,ii=2,wi=0,Rr=1,kc=2,Bc=3,zc=4,Cf=5,Sr=100,Rf=101,Lf=102,Vc=103,Gc=104,Df=200,Pf=201,If=202,Nf=203,Bh=204,zh=205,Ff=206,Of=207,Uf=208,kf=209,Bf=210,zf=0,Vf=1,Gf=2,rl=3,Hf=4,Wf=5,Xf=6,qf=7,Vh=0,jf=1,Yf=2,si=0,Kf=1,Zf=2,Jf=3,$f=4,Qf=5,Gh=300,Fr=301,Or=302,sl=303,al=304,za=306,Ur=1e3,yn=1001,Ea=1002,Ct=1003,ol=1004,ya=1005,Zt=1006,Hh=1007,Yi=1008,Ki=1009,ep=1010,tp=1011,Wh=1012,np=1013,Bi=1014,yi=1015,Ms=1016,ip=1017,rp=1018,Lr=1020,sp=1021,bn=1023,ap=1024,op=1025,Hi=1026,kr=1027,lp=1028,cp=1029,up=1030,hp=1031,dp=1033,lo=33776,co=33777,uo=33778,ho=33779,Hc=35840,Wc=35841,Xc=35842,qc=35843,fp=36196,jc=37492,Yc=37496,Kc=37808,Zc=37809,Jc=37810,$c=37811,Qc=37812,eu=37813,tu=37814,nu=37815,iu=37816,ru=37817,su=37818,au=37819,ou=37820,lu=37821,fo=36492,pp=36283,cu=36284,uu=36285,hu=36286,Ol=2200,mp=2201,gp=2202,Ss=2300,Br=2301,po=2302,wr=2400,Tr=2401,Aa=2402,Ul=2500,_p=2501,xp=0,Xh=1,ll=2,Zi=3e3,qe=3001,vp=3200,yp=3201,qh=0,bp=1,kn="srgb",ws="srgb-linear",mo=7680,Mp=519,cl=35044,du="300 es",ul=1035;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const _s=Math.PI/180,Ts=180/Math.PI;function Dn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[o&255]+Bt[o>>8&255]+Bt[o>>16&255]+Bt[o>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function jt(o,e,t){return Math.max(e,Math.min(t,o))}function kl(o,e){return(o%e+e)%e}function Sp(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function wp(o,e,t){return o!==e?(t-o)/(e-o):0}function xs(o,e,t){return(1-t)*o+t*e}function Tp(o,e,t,n){return xs(o,e,1-Math.exp(-t*n))}function Ep(o,e=1){return e-Math.abs(kl(o,e*2)-e)}function Ap(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Cp(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Rp(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Lp(o,e){return o+Math.random()*(e-o)}function Dp(o){return o*(.5-Math.random())}function Pp(o){o!==void 0&&(fu=o);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ip(o){return o*_s}function Np(o){return o*Ts}function hl(o){return(o&o-1)===0&&o!==0}function jh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ca(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Fp(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),d=s((e-n)/2),p=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*p,a*c);break;case"YXY":o.set(l*p,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function nt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Op=Object.freeze({__proto__:null,DEG2RAD:_s,RAD2DEG:Ts,ceilPowerOfTwo:jh,clamp:jt,damp:Tp,degToRad:Ip,denormalize:ri,euclideanModulo:kl,floorPowerOfTwo:Ca,generateUUID:Dn,inverseLerp:wp,isPowerOfTwo:hl,lerp:xs,mapLinear:Sp,normalize:nt,pingpong:Ep,radToDeg:Np,randFloat:Lp,randFloatSpread:Dp,randInt:Rp,seededRandom:Pp,setQuaternionFromProperEuler:Fp,smootherstep:Cp,smoothstep:Ap});class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(){ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],f=i[0],m=i[3],_=i[6],b=i[1],x=i[4],v=i[7],S=i[2],E=i[5],A=i[8];return r[0]=s*f+a*b+l*S,r[3]=s*m+a*x+l*E,r[6]=s*_+a*v+l*A,r[1]=c*f+u*b+h*S,r[4]=c*m+u*x+h*E,r[7]=c*_+u*v+h*A,r[2]=d*f+p*b+g*S,r[5]=d*m+p*x+g*E,r[8]=d*_+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*s-a*c,d=a*l-u*r,p=c*r-s*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(a*n-i*s)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-a*t)*f,e[6]=p*f,e[7]=(n*l-c*t)*f,e[8]=(s*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new ln;function Yh(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Es(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ba(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const _o={[kn]:{[ws]:Wi},[ws]:{[kn]:ba}},Wt={legacyMode:!0,get workingColorSpace(){return ws},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(_o[e]&&_o[e][t]!==void 0){const n=_o[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},St={r:0,g:0,b:0},Cn={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function xo(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Js(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Wt.workingColorSpace){if(e=kl(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=xo(s,r,e+1/3),this.g=xo(s,r,e),this.b=xo(s,r,e-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(e,t=kn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=kn){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Wt.fromWorkingColorSpace(Js(this,St),e),jt(St.r*255,0,255)<<16^jt(St.g*255,0,255)<<8^jt(St.b*255,0,255)<<0}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Js(this,St),t);const n=St.r,i=St.g,r=St.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Js(this,St),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=kn){return Wt.fromWorkingColorSpace(Js(this,St),e),e!==kn?`color(${e} ${St.r} ${St.g} ${St.b})`:`rgb(${St.r*255|0},${St.g*255|0},${St.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Cn),Cn.h+=e,Cn.s+=t,Cn.l+=n,this.setHSL(Cn.h,Cn.s,Cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Zs);const n=xs(Cn.h,Zs.h,t),i=xs(Cn.s,Zs.s,t),r=xs(Cn.l,Zs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=Kh;let lr;class Zh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Es("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Wi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jh{constructor(e=null){this.isSource=!0,this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(vo(i[s].image)):r.push(vo(i[s]))}else r=vo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;class It extends tr{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=yn,i=yn,r=Zt,s=Yi,a=bn,l=Ki,c=It.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Dn(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ur:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ur:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Gh;It.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],f=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,S=(_+1)/2,E=(u+d)/4,A=(h+f)/4,y=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=A/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=y/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=y/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-f)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ji extends tr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $h extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kp extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[s+0],p=r[s+1],g=r[s+2],f=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==p||u!==g){let m=1-a;const _=l*d+c*p+u*g+h*f,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,_*b);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const v=a*b;if(l=l*m+d*v,c=c*m+p*v,u=u*m+g*v,h=h*m+f*v,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],d=r[s+1],p=r[s+2],g=r[s+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(s-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-s*t,d=-r*t-s*n-a*i;return this.x=c*l+d*-r+u*-a-h*-s,this.y=u*l+d*-s+h*-r-c*-a,this.z=h*l+d*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new N,pu=new Pn;class Kr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>s&&(s=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>s&&(s=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)Li.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox),bo.applyMatrix4(e.matrixWorld),this.union(bo);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),$s.subVectors(this.max,ts),cr.subVectors(e.a,ts),ur.subVectors(e.b,ts),hr.subVectors(e.c,ts),di.subVectors(ur,cr),fi.subVectors(hr,ur),Di.subVectors(cr,hr);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Di.z,Di.y,di.z,0,-di.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-di.y,di.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!Mo(t,cr,ur,hr,$s)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,cr,ur,hr,$s))?!1:(Qs.crossVectors(di,fi),t=[Qs.x,Qs.y,Qs.z],Mo(t,cr,ur,hr,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new N,new N,new N,new N,new N,new N,new N,new N],Li=new N,bo=new Kr,cr=new N,ur=new N,hr=new N,di=new N,fi=new N,Di=new N,ts=new N,$s=new N,Qs=new N,Pi=new N;function Mo(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){Pi.fromArray(o,r);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bp=new Kr,ns=new N,So=new N;class Zr{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(So)),this.expandByPoint(ns.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new N,wo=new N,ea=new N,pi=new N,To=new N,ta=new N,Eo=new N;class Va{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(t).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wo.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(wo);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ea),a=pi.dot(this.direction),l=-pi.dot(ea),c=pi.lengthSq(),u=Math.abs(1-s*s);let h,d,p,g;if(u>0)if(h=s*l-a,d=s*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ea).multiplyScalar(d).add(wo),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){To.subVectors(t,e),ta.subVectors(n,e),Eo.crossVectors(To,ta);let s=this.direction.dot(Eo),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(pi,ta));if(l<0)return null;const c=a*this.direction.dot(To.cross(pi));if(c<0||l+c>s)return null;const u=-a*pi.dot(Eo);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,u,h,d,p,g,f,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=g,_[11]=f,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),s=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*h,g=a*u,f=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-f*c,t[9]=-a*l,t[2]=f-d*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d+f*a,t[4]=g*a-p,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=f+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d-f*a,t[4]=-s*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=f-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*h,g=a*u,f=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,g=a*l,f=a*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+p,t[1]=h,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-f*h}else if(e.order==="XZY"){const d=s*l,p=s*c,g=a*l,f=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=s*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Vp)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),mi.crossVectors(n,rn),mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),mi.crossVectors(n,rn)),mi.normalize(),na.crossVectors(rn,mi),i[0]=mi.x,i[4]=na.x,i[8]=rn.x,i[1]=mi.y,i[5]=na.y,i[9]=rn.y,i[2]=mi.z,i[6]=na.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],f=n[6],m=n[10],_=n[14],b=n[3],x=n[7],v=n[11],S=n[15],E=i[0],A=i[4],y=i[8],M=i[12],R=i[1],I=i[5],U=i[9],D=i[13],L=i[2],F=i[6],G=i[10],K=i[14],V=i[3],$=i[7],Z=i[11],de=i[15];return r[0]=s*E+a*R+l*L+c*V,r[4]=s*A+a*I+l*F+c*$,r[8]=s*y+a*U+l*G+c*Z,r[12]=s*M+a*D+l*K+c*de,r[1]=u*E+h*R+d*L+p*V,r[5]=u*A+h*I+d*F+p*$,r[9]=u*y+h*U+d*G+p*Z,r[13]=u*M+h*D+d*K+p*de,r[2]=g*E+f*R+m*L+_*V,r[6]=g*A+f*I+m*F+_*$,r[10]=g*y+f*U+m*G+_*Z,r[14]=g*M+f*D+m*K+_*de,r[3]=b*E+x*R+v*L+S*V,r[7]=b*A+x*I+v*F+S*$,r[11]=b*y+x*U+v*G+S*Z,r[15]=b*M+x*D+v*K+S*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],f=e[7],m=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*p-n*l*p)+f*(+t*l*p-t*c*d+r*s*d-i*s*p+i*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*s*h+n*s*p+r*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*d+i*s*h-n*s*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],f=e[13],m=e[14],_=e[15],b=h*m*c-f*d*c+f*l*p-a*m*p-h*l*_+a*d*_,x=g*d*c-u*m*c-g*l*p+s*m*p+u*l*_-s*d*_,v=u*f*c-g*h*c+g*a*p-s*f*p-u*a*_+s*h*_,S=g*h*l-u*f*l-g*a*d+s*f*d+u*a*m-s*h*m,E=t*b+n*x+i*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=b*A,e[1]=(f*d*r-h*m*r-f*i*p+n*m*p+h*i*_-n*d*_)*A,e[2]=(a*m*r-f*l*r+f*i*c-n*m*c-a*i*_+n*l*_)*A,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*_+t*d*_)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*_-t*l*_)*A,e[7]=(s*d*r-u*l*r+u*i*c-t*d*c-s*i*p+t*l*p)*A,e[8]=v*A,e[9]=(g*h*r-u*f*r-g*n*p+t*f*p+u*n*_-t*h*_)*A,e[10]=(s*f*r-g*a*r+g*n*c-t*f*c-s*n*_+t*a*_)*A,e[11]=(u*a*r-s*h*r-u*n*c+t*h*c+s*n*p-t*a*p)*A,e[12]=S*A,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*m+t*h*m)*A,e[14]=(g*a*i-s*f*i-g*n*l+t*f*l+s*n*m-t*a*m)*A,e[15]=(s*h*i-u*a*i+u*n*l-t*h*l-s*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,h=a+a,d=r*c,p=r*u,g=r*h,f=s*u,m=s*h,_=a*h,b=l*c,x=l*u,v=l*h,S=n.x,E=n.y,A=n.z;return i[0]=(1-(f+_))*S,i[1]=(p+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+_))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+x)*A,i[9]=(m-b)*A,i[10]=(1-(d+f))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=dr.set(i[0],i[1],i[2]).length();const s=dr.set(i[4],i[5],i[6]).length(),a=dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/r,u=1/s,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(s+r)/(s-r),p=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,d=(n+i)*c,p=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const dr=new N,Rn=new Ve,zp=new N(0,0,0),Vp=new N(1,1,1),mi=new N,na=new N,rn=new N,mu=new Ve,gu=new Pn;class Ga{constructor(e=0,t=0,n=0,i=Ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ga.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gp=0;const _u=new N,fr=new Pn,Zn=new Ve,ia=new N,is=new N,Hp=new N,Wp=new Pn,xu=new N(1,0,0),vu=new N(0,1,0),yu=new N(0,0,1),Xp={type:"added"},bu={type:"removed"};class ht extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new N,t=new Ga,n=new Pn,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ln}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(is,ia,this.up):Zn.lookAt(ia,is,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),fr.setFromRotationMatrix(Zn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new N(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new N,Jn=new N,Ao=new N,$n=new N,pr=new N,mr=new N,Mu=new N,Co=new N,Ro=new N,Lo=new N;class ni{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),Jn.subVectors(n,t),Ao.subVectors(e,t);const s=Ln.dot(Ln),a=Ln.dot(Jn),l=Ln.dot(Ao),c=Jn.dot(Jn),u=Jn.dot(Ao),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(s*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,$n),l.set(0,0),l.addScaledVector(r,$n.x),l.addScaledVector(s,$n.y),l.addScaledVector(a,$n.z),l}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),Jn.subVectors(e,t),Ln.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ni.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;pr.subVectors(i,n),mr.subVectors(r,n),Co.subVectors(e,n);const l=pr.dot(Co),c=mr.dot(Co);if(l<=0&&c<=0)return t.copy(n);Ro.subVectors(e,i);const u=pr.dot(Ro),h=mr.dot(Ro);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(pr,s);Lo.subVectors(e,r);const p=pr.dot(Lo),g=mr.dot(Lo);if(g>=0&&p<=g)return t.copy(r);const f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(mr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Mu.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Mu,a);const _=1/(m+f+d);return s=f*_,a=d*_,t.copy(n).addScaledVector(pr,s).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qp=0;class In extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Rr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bh,this.blendDst=zh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zi extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new N,ra=new Be;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qh extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ed extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ai extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jp=0;const gn=new Ve,Do=new ht,gr=new N,sn=new Kr,rs=new Kr,At=new N;class Xn extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?ed:Qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ln().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(sn.min,rs.min),sn.expandByPoint(At),At.addVectors(sn.max,rs.max),sn.expandByPoint(At)):(sn.expandByPoint(rs.min),sn.expandByPoint(rs.max))}sn.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),At.add(gr)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new N,u[R]=new N;const h=new N,d=new N,p=new N,g=new Be,f=new Be,m=new Be,_=new N,b=new N;function x(R,I,U){h.fromArray(i,R*3),d.fromArray(i,I*3),p.fromArray(i,U*3),g.fromArray(s,R*2),f.fromArray(s,I*2),m.fromArray(s,U*2),d.sub(h),p.sub(h),f.sub(g),m.sub(g);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(p,-f.y).multiplyScalar(D),b.copy(p).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(D),c[R].add(_),c[I].add(_),c[U].add(_),u[R].add(b),u[I].add(b),u[U].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,I=v.length;R<I;++R){const U=v[R],D=U.start,L=U.count;for(let F=D,G=D+L;F<G;F+=3)x(n[F+0],n[F+1],n[F+2])}const S=new N,E=new N,A=new N,y=new N;function M(R){A.fromArray(r,R*3),y.copy(A);const I=c[R];S.copy(I),S.sub(A.multiplyScalar(A.dot(I))).normalize(),E.crossVectors(y,I);const D=E.dot(u[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=D}for(let R=0,I=v.length;R<I;++R){const U=v[R],D=U.start,L=U.count;for(let F=D,G=D+L;F<G;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new N,r=new N,s=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),f=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let f=0,m=l.length;f<m;f++){a.isInterleavedBufferAttribute?p=l[f]*a.data.stride+a.offset:p=l[f]*u;for(let _=0;_<u;_++)d[g++]=c[p++]}return new Yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new Ve,_r=new Va,Po=new Zr,ss=new N,as=new N,os=new N,Io=new N,sa=new N,aa=new Be,oa=new Be,la=new Be,No=new N,ca=new N;class cn extends ht{constructor(e=new Xn,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Io.fromBufferAttribute(h,e),s?sa.addScaledVector(Io,u):sa.addScaledVector(Io.sub(t),u))}t.add(sa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),e.ray.intersectsSphere(Po)===!1)||(Su.copy(r).invert(),_r.copy(e.ray).applyMatrix4(Su),n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const f=h[p],m=i[f.materialIndex],_=Math.max(f.start,d.start),b=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let x=_,v=b;x<v;x+=3){const S=a.getX(x),E=a.getX(x+1),A=a.getX(x+2);s=ua(this,m,e,_r,c,u,S,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let f=p,m=g;f<m;f+=3){const _=a.getX(f),b=a.getX(f+1),x=a.getX(f+2);s=ua(this,i,e,_r,c,u,_,b,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const f=h[p],m=i[f.materialIndex],_=Math.max(f.start,d.start),b=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let x=_,v=b;x<v;x+=3){const S=x,E=x+1,A=x+2;s=ua(this,m,e,_r,c,u,S,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=p,m=g;f<m;f+=3){const _=f,b=f+1,x=f+2;s=ua(this,i,e,_r,c,u,_,b,x),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Yp(o,e,t,n,i,r,s,a){let l;if(e.side===un?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side===oi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:o}}function ua(o,e,t,n,i,r,s,a,l){o.getVertexPosition(s,ss),o.getVertexPosition(a,as),o.getVertexPosition(l,os);const c=Yp(o,e,t,n,ss,as,os,No);if(c){i&&(aa.fromBufferAttribute(i,s),oa.fromBufferAttribute(i,a),la.fromBufferAttribute(i,l),c.uv=ni.getUV(No,ss,as,os,aa,oa,la,new Be)),r&&(aa.fromBufferAttribute(r,s),oa.fromBufferAttribute(r,a),la.fromBufferAttribute(r,l),c.uv2=ni.getUV(No,ss,as,os,aa,oa,la,new Be));const u={a:s,b:a,c:l,normal:new N,materialIndex:0};ni.getNormal(ss,as,os,u.normal),c.face=u}return c}class Os extends Xn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(h,2));function g(f,m,_,b,x,v,S,E,A,y,M){const R=v/A,I=S/y,U=v/2,D=S/2,L=E/2,F=A+1,G=y+1;let K=0,V=0;const $=new N;for(let Z=0;Z<G;Z++){const de=Z*I-D;for(let k=0;k<F;k++){const J=k*R-U;$[f]=J*b,$[m]=de*x,$[_]=L,c.push($.x,$.y,$.z),$[f]=0,$[m]=0,$[_]=E>0?1:-1,u.push($.x,$.y,$.z),h.push(k/A),h.push(1-Z/y),K+=1}}for(let Z=0;Z<y;Z++)for(let de=0;de<A;de++){const k=d+de+F*Z,J=d+de+F*(Z+1),ee=d+(de+1)+F*(Z+1),ie=d+(de+1)+F*Z;l.push(k,J,ie),l.push(J,ee,ie),V+=6}a.addGroup(p,V,M),p+=V,d+=K}}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(o){const e={};for(let t=0;t<o.length;t++){const n=zr(o[t]);for(const i in n)e[i]=n[i]}return e}function Kp(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function td(o){return o.getRenderTarget()===null&&o.outputEncoding===qe?kn:ws}const Zp={clone:zr,merge:qt};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nd extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends nd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,vr=1;class Qp extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dt(xr,vr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Dt(xr,vr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Dt(xr,vr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Dt(xr,vr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Dt(xr,vr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Dt(xr,vr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=si,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class id extends It{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class em extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new id(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Os(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:wi});r.uniforms.tEquirect.value=t;const s=new cn(i,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Zt),new Qp(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Fo=new N,tm=new N,nm=new ln;class Fi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Fo.subVectors(n,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nm.getNormalMatrix(e),i=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Zr,ha=new N;class zl{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],f=n[11],m=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-i,h-l,f-d,x-m).normalize(),t[1].setComponents(a+i,h+l,f+d,x+m).normalize(),t[2].setComponents(a+r,h+c,f+p,x+_).normalize(),t[3].setComponents(a-r,h-c,f-p,x-_).normalize(),t[4].setComponents(a-s,h-u,f-g,x-b).normalize(),t[5].setComponents(a+s,h+u,f+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ha.x=i.normal.x>0?e.max.x:e.min.x,ha.y=i.normal.y>0?e.max.y:e.min.y,ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rd(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function im(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=o.createBuffer();o.bindBuffer(u,p),o.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;o.bindBuffer(h,c),p.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):o.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class Ha extends Xn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],f=[],m=[];for(let _=0;_<u;_++){const b=_*d-s;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-b,0),f.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,v=b+c*(_+1),S=b+1+c*(_+1),E=b+1+c*_;p.push(x,v,E),p.push(v,S,E)}this.setIndex(p),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(f,3)),this.setAttribute("uv",new ai(m,2))}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um="vec3 transformed = vec3( position );",hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ig=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Kg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$g=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,e_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,t_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,u_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,N_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:rm,alphamap_pars_fragment:sm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,begin_vertex:um,beginnormal_vertex:hm,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:ym,color_pars_vertex:bm,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Em,displacementmap_vertex:Am,emissivemap_fragment:Cm,emissivemap_pars_fragment:Rm,encodings_fragment:Lm,encodings_pars_fragment:Dm,envmap_fragment:Pm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Nm,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:jm,envmap_vertex:Om,fog_vertex:Um,fog_pars_vertex:km,fog_fragment:Bm,fog_pars_fragment:zm,gradientmap_pars_fragment:Vm,lightmap_fragment:Gm,lightmap_pars_fragment:Hm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:Ym,lights_toon_pars_fragment:Km,lights_phong_fragment:Zm,lights_phong_pars_fragment:Jm,lights_physical_fragment:$m,lights_physical_pars_fragment:Qm,lights_fragment_begin:eg,lights_fragment_maps:tg,lights_fragment_end:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:sg,logdepthbuf_vertex:ag,map_fragment:og,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:ug,metalnessmap_fragment:hg,metalnessmap_pars_fragment:dg,morphcolor_vertex:fg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:xg,normal_pars_fragment:vg,normal_pars_vertex:yg,normal_vertex:bg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Eg,output_fragment:Ag,packing:Cg,premultiplied_alpha_fragment:Rg,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Pg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:Ug,shadowmask_pars_fragment:kg,skinbase_vertex:Bg,skinning_pars_vertex:zg,skinning_vertex:Vg,skinnormal_vertex:Gg,specularmap_fragment:Hg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:jg,transmission_pars_fragment:Yg,uv_pars_fragment:Kg,uv_pars_vertex:Zg,uv_vertex:Jg,uv2_pars_fragment:$g,uv2_pars_vertex:Qg,uv2_vertex:e_,worldpos_vertex:t_,background_vert:n_,background_frag:i_,backgroundCube_vert:r_,backgroundCube_frag:s_,cube_vert:a_,cube_frag:o_,depth_vert:l_,depth_frag:c_,distanceRGBA_vert:u_,distanceRGBA_frag:h_,equirect_vert:d_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:x_,meshlambert_frag:v_,meshmatcap_vert:y_,meshmatcap_frag:b_,meshnormal_vert:M_,meshnormal_frag:S_,meshphong_vert:w_,meshphong_frag:T_,meshphysical_vert:E_,meshphysical_frag:A_,meshtoon_vert:C_,meshtoon_frag:R_,points_vert:L_,points_frag:D_,shadow_vert:P_,shadow_frag:I_,sprite_vert:N_,sprite_frag:F_},re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ln},uv2Transform:{value:new ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}}},Bn={basic:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:qt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:qt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:qt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ln},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:qt([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:qt([re.lights,re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Bn.physical={uniforms:qt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const da={r:0,b:0,g:0};function O_(o,e,t,n,i,r,s){const a=new Oe(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(m,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=o.xr,S=v.getSession&&v.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?f(a,l):x&&x.isColor&&(f(x,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===za)?(u===void 0&&(u=new cn(new Os(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:zr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==qe,(h!==x||d!==x.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=o.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new cn(new Ha(2,2),new $i({name:"BackgroundMaterial",uniforms:zr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==o.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=o.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function f(m,_){m.getRGB(da,td(o)),n.buffers.color.setClear(da.r,da.g,da.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:g}}function U_(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function h(L,F,G,K,V){let $=!1;if(s){const Z=f(K,G,F);c!==Z&&(c=Z,p(c.object)),$=_(L,K,G,V),$&&b(L,K,G,V)}else{const Z=F.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==Z)&&(c.geometry=K.id,c.program=G.id,c.wireframe=Z,$=!0)}V!==null&&t.update(V,34963),($||u)&&(u=!1,y(L,F,G,K),V!==null&&o.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?o.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?o.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function f(L,F,G){const K=G.wireframe===!0;let V=a[L.id];V===void 0&&(V={},a[L.id]=V);let $=V[F.id];$===void 0&&($={},V[F.id]=$);let Z=$[K];return Z===void 0&&(Z=m(d()),$[K]=Z),Z}function m(L){const F=[],G=[],K=[];for(let V=0;V<i;V++)F[V]=0,G[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:K,object:L,attributes:{},index:null}}function _(L,F,G,K){const V=c.attributes,$=F.attributes;let Z=0;const de=G.getAttributes();for(const k in de)if(de[k].location>=0){const ee=V[k];let ie=$[k];if(ie===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;Z++}return c.attributesNum!==Z||c.index!==K}function b(L,F,G,K){const V={},$=F.attributes;let Z=0;const de=G.getAttributes();for(const k in de)if(de[k].location>=0){let ee=$[k];ee===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),V[k]=ie,Z++}c.attributes=V,c.attributesNum=Z,c.index=K}function x(){const L=c.newAttributes;for(let F=0,G=L.length;F<G;F++)L[F]=0}function v(L){S(L,0)}function S(L,F){const G=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;G[L]=1,K[L]===0&&(o.enableVertexAttribArray(L),K[L]=1),V[L]!==F&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),V[L]=F)}function E(){const L=c.newAttributes,F=c.enabledAttributes;for(let G=0,K=F.length;G<K;G++)F[G]!==L[G]&&(o.disableVertexAttribArray(G),F[G]=0)}function A(L,F,G,K,V,$){n.isWebGL2===!0&&(G===5124||G===5125)?o.vertexAttribIPointer(L,F,G,V,$):o.vertexAttribPointer(L,F,G,K,V,$)}function y(L,F,G,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=K.attributes,$=G.getAttributes(),Z=F.defaultAttributeValues;for(const de in $){const k=$[de];if(k.location>=0){let J=V[de];if(J===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ee=J.normalized,ie=J.itemSize,z=t.get(J);if(z===void 0)continue;const Te=z.buffer,ve=z.type,be=z.bytesPerElement;if(J.isInterleavedBufferAttribute){const ce=J.data,Ye=ce.stride,Le=J.offset;if(ce.isInstancedInterleavedBuffer){for(let Ee=0;Ee<k.locationSize;Ee++)S(k.location+Ee,ce.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ee=0;Ee<k.locationSize;Ee++)v(k.location+Ee);o.bindBuffer(34962,Te);for(let Ee=0;Ee<k.locationSize;Ee++)A(k.location+Ee,ie/k.locationSize,ve,ee,Ye*be,(Le+ie/k.locationSize*Ee)*be)}else{if(J.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)S(k.location+ce,J.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ce=0;ce<k.locationSize;ce++)v(k.location+ce);o.bindBuffer(34962,Te);for(let ce=0;ce<k.locationSize;ce++)A(k.location+ce,ie/k.locationSize,ve,ee,ie*be,ie/k.locationSize*ce*be)}}else if(Z!==void 0){const ee=Z[de];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(k.location,ee);break;case 3:o.vertexAttrib3fv(k.location,ee);break;case 4:o.vertexAttrib4fv(k.location,ee);break;default:o.vertexAttrib1fv(k.location,ee)}}}}E()}function M(){U();for(const L in a){const F=a[L];for(const G in F){const K=F[G];for(const V in K)g(K[V].object),delete K[V];delete F[G]}delete a[L]}}function R(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const G in F){const K=F[G];for(const V in K)g(K[V].object),delete K[V];delete F[G]}delete a[L.id]}function I(L){for(const F in a){const G=a[F];if(G[L.id]===void 0)continue;const K=G[L.id];for(const V in K)g(K[V].object),delete K[V];delete G[L.id]}}function U(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function k_(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=o,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function B_(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),p=o.getParameter(3379),g=o.getParameter(34076),f=o.getParameter(34921),m=o.getParameter(36347),_=o.getParameter(36348),b=o.getParameter(36349),x=d>0,v=s||e.has("OES_texture_float"),S=x&&v,E=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:E}}function z_(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Fi,a=new ln,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,x=b*4;let v=_.clippingState||null;l.value=v,v=u(g,d,x,p);for(let S=0;S!==x;++S)v[S]=t[S];_.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const f=h!==null?h.length:0;let m=null;if(f!==0){if(m=l.value,g!==!0||m===null){const _=p+f*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,v=p;x!==f;++x,v+=4)s.copy(h[x]).applyMatrix4(b,a),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}}function V_(o){let e=new WeakMap;function t(s,a){return a===sl?s.mapping=Fr:a===al&&(s.mapping=Or),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===sl||a===al)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new em(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Vl extends nd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,wu=[.125,.215,.35,.446,.526,.582],ki=20,Oo=new Vl,Tu=new Oe;let Uo=null;const Oi=(1+Math.sqrt(5))/2,br=1/Oi,Eu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Oi,br),new N(0,Oi,-br),new N(br,0,Oi),new N(-br,0,Oi),new N(Oi,br,0),new N(-Oi,br,0)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Uo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ms,format:bn,encoding:Zi,depthBuffer:!1},i=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(r)),this._blurMaterial=H_(r,e,t)}return i}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,i){const a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Tu),u.toneMapping=si,u.autoClear=!1;const p=new zi({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new cn(new Os,p);let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(Tu),f=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;fa(i,b*x,_>2?x:0,x,x),u.setRenderTarget(i),f&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fr||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new cn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Eu[(i-1)%Eu.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new cn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),f=r/g,m=isFinite(r)?1+Math.floor(u*f):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const _=[];let b=0;for(let A=0;A<ki;++A){const y=A/f,M=Math.exp(-y*y/2);_.push(M),A===0?b+=M:A<m&&(b+=2*M)}for(let A=0;A<_.length;A++)_[A]=_[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-Er?i-x+Er:0),E=4*(this._cubeSize-v);fa(t,S,E,3*v,2*v),l.setRenderTarget(t),l.render(h,Oo)}}function G_(o){const e=[],t=[],n=[];let i=o;const r=o-Er+1+wu.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-Er?l=wu[s-o+Er-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,f=3,m=2,_=1,b=new Float32Array(f*g*p),x=new Float32Array(m*g*p),v=new Float32Array(_*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,y=E>2?0:-1,M=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];b.set(M,f*g*E),x.set(d,m*g*E);const R=[E,E,E,E,E,E];v.set(R,_*g*E)}const S=new Xn;S.setAttribute("position",new Yt(b,f)),S.setAttribute("uv",new Yt(x,m)),S.setAttribute("faceIndex",new Yt(v,_)),e.push(S),i>Er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(o,e,t){const n=new Ji(o,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function H_(o,e,t){const n=new Float32Array(ki),i=new N(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ru(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Lu(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W_(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sl||l===al,u=l===Fr||l===Or;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Au(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Au(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function X_(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function q_(o,e,t,n){const i={},r=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const f=p[g];for(let m=0,_=f.length;m<_;m++)e.update(f[m],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let f=0;if(p!==null){const b=p.array;f=p.version;for(let x=0,v=b.length;x<v;x+=3){const S=b[x+0],E=b[x+1],A=b[x+2];d.push(S,E,E,A,A,S)}}else{const b=g.array;f=g.version;for(let x=0,v=b.length/3-1;x<v;x+=3){const S=x+0,E=x+1,A=x+2;d.push(S,E,E,A,A,S)}}const m=new(Yh(d)?ed:Qh)(d,1);m.version=f;const _=r.get(h);_&&e.remove(_),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function j_(o,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){o.drawElements(r,p,a,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let f,m;if(i)f=o,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function Y_(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function K_(o,e){return o[0]-e[0]}function Z_(o,e){return Math.abs(e[1])-Math.abs(o[1])}function J_(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==f){let F=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let R=u.attributes.position.count*M,I=1;R>e.maxTextureSize&&(I=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const U=new Float32Array(R*I*4*f),D=new $h(U,R,I,f);D.type=yi,D.needsUpdate=!0;const L=M*4;for(let G=0;G<f;G++){const K=E[G],V=A[G],$=y[G],Z=R*I*4*G;for(let de=0;de<K.count;de++){const k=de*L;x===!0&&(s.fromBufferAttribute(K,de),U[Z+k+0]=s.x,U[Z+k+1]=s.y,U[Z+k+2]=s.z,U[Z+k+3]=0),v===!0&&(s.fromBufferAttribute(V,de),U[Z+k+4]=s.x,U[Z+k+5]=s.y,U[Z+k+6]=s.z,U[Z+k+7]=0),S===!0&&(s.fromBufferAttribute($,de),U[Z+k+8]=s.x,U[Z+k+9]=s.y,U[Z+k+10]=s.z,U[Z+k+11]=$.itemSize===4?s.w:1)}}m={count:f,texture:D,size:new Be(R,I)},r.set(u,m),u.addEventListener("dispose",F)}let _=0;for(let x=0;x<p.length;x++)_+=p[x];const b=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",p),d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let f=n[u.id];if(f===void 0||f.length!==g){f=[];for(let v=0;v<g;v++)f[v]=[v,0];n[u.id]=f}for(let v=0;v<g;v++){const S=f[v];S[0]=v,S[1]=p[v]}f.sort(Z_);for(let v=0;v<8;v++)v<g&&f[v][1]?(a[v][0]=f[v][0],a[v][1]=f[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(K_);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const S=a[v],E=S[0],A=S[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+v)!==m[E]&&u.setAttribute("morphTarget"+v,m[E]),_&&u.getAttribute("morphNormal"+v)!==_[E]&&u.setAttribute("morphNormal"+v,_[E]),i[v]=A,b+=A):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",x),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function $_(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const sd=new It,ad=new $h,od=new kp,ld=new id,Du=[],Pu=[],Iu=new Float32Array(16),Nu=new Float32Array(9),Fu=new Float32Array(4);function Jr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Du[i];if(r===void 0&&(r=new Float32Array(i),Du[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Tt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Et(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Wa(o,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Q_(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function e0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2fv(this.addr,e),Et(t,e)}}function t0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;o.uniform3fv(this.addr,e),Et(t,e)}}function n0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4fv(this.addr,e),Et(t,e)}}function i0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Fu.set(n),o.uniformMatrix2fv(this.addr,!1,Fu),Et(t,n)}}function r0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Nu.set(n),o.uniformMatrix3fv(this.addr,!1,Nu),Et(t,n)}}function s0(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,n))return;Iu.set(n),o.uniformMatrix4fv(this.addr,!1,Iu),Et(t,n)}}function a0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function o0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2iv(this.addr,e),Et(t,e)}}function l0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;o.uniform3iv(this.addr,e),Et(t,e)}}function c0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4iv(this.addr,e),Et(t,e)}}function u0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function h0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2uiv(this.addr,e),Et(t,e)}}function d0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;o.uniform3uiv(this.addr,e),Et(t,e)}}function f0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4uiv(this.addr,e),Et(t,e)}}function p0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||sd,i)}function m0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||od,i)}function g0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ld,i)}function _0(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ad,i)}function x0(o){switch(o){case 5126:return Q_;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(o,e){o.uniform1fv(this.addr,e)}function y0(o,e){const t=Jr(e,this.size,2);o.uniform2fv(this.addr,t)}function b0(o,e){const t=Jr(e,this.size,3);o.uniform3fv(this.addr,t)}function M0(o,e){const t=Jr(e,this.size,4);o.uniform4fv(this.addr,t)}function S0(o,e){const t=Jr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function w0(o,e){const t=Jr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function T0(o,e){const t=Jr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function E0(o,e){o.uniform1iv(this.addr,e)}function A0(o,e){o.uniform2iv(this.addr,e)}function C0(o,e){o.uniform3iv(this.addr,e)}function R0(o,e){o.uniform4iv(this.addr,e)}function L0(o,e){o.uniform1uiv(this.addr,e)}function D0(o,e){o.uniform2uiv(this.addr,e)}function P0(o,e){o.uniform3uiv(this.addr,e)}function I0(o,e){o.uniform4uiv(this.addr,e)}function N0(o,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Tt(n,r)||(o.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||sd,r[s])}function F0(o,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Tt(n,r)||(o.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||od,r[s])}function O0(o,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Tt(n,r)||(o.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||ld,r[s])}function U0(o,e,t){const n=this.cache,i=e.length,r=Wa(t,i);Tt(n,r)||(o.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||ad,r[s])}function k0(o){switch(o){case 5126:return v0;case 35664:return y0;case 35665:return b0;case 35666:return M0;case 35674:return S0;case 35675:return w0;case 35676:return T0;case 5124:case 35670:return E0;case 35667:case 35671:return A0;case 35668:case 35672:return C0;case 35669:case 35673:return R0;case 5125:return L0;case 36294:return D0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return U0}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=x0(t.type)}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=k0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Ou(o,e){o.seq.push(e),o.map[e.id]=e}function G0(o,e,t){const n=o.name,i=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),s=ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Ou(t,c===void 0?new B0(a,o,e):new z0(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new V0(a),Ou(t,h)),t=h}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);G0(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Uu(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let H0=0;function W0(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function X0(o){switch(o){case Zi:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function ku(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+W0(o.getShaderSource(e),s)}else return i}function q0(o,e){const t=X0(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function j0(o,e){let t;switch(e){case Kf:t="Linear";break;case Zf:t="Reinhard";break;case Jf:t="OptimizedCineon";break;case $f:t="ACESFilmic";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y0(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function K0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function ps(o){return o!==""}function Bu(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(o){return o.replace(J0,$0)}function $0(o,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dl(t)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(o){return o.replace(Q0,ex)}function ex(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tx(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===fs&&(e="SHADOWMAP_TYPE_VSM"),e}function nx(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Fr:case Or:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ix(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function rx(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Vh:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Yf:e="ENVMAP_BLENDING_ADD";break}return e}function sx(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ax(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=tx(t),c=nx(t),u=ix(t),h=rx(t),d=sx(t),p=t.isWebGL2?"":Y0(t),g=K0(r),f=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ps).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(ps).join(`
`),_.length>0&&(_+=`
`)):(m=[Gu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),_=[p,Gu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Fe.tonemapping_pars_fragment:"",t.toneMapping!==si?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,q0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),s=dl(s),s=Bu(s,t),s=zu(s,t),a=dl(a),a=Bu(a,t),a=zu(a,t),s=Vu(s),a=Vu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+m+s,v=b+_+a,S=Uu(i,35633,x),E=Uu(i,35632,v);if(i.attachShader(f,S),i.attachShader(f,E),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const M=i.getProgramInfoLog(f).trim(),R=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(E).trim();let U=!0,D=!0;if(i.getProgramParameter(f,35714)===!1){U=!1;const L=ku(i,S,"vertex"),F=ku(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+M+`
`+L+`
`+F)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:U,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:I,prefix:_}})}i.deleteShader(S),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Ma(i,f)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=Z0(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=H0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=E,this}let ox=0;class lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cx(e),t.set(e,n)),n}}class cx{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}}function ux(o,e,t,n,i,r,s){const a=new Bl,l=new lx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,M,R,I,U){const D=I.fog,L=U.geometry,F=y.isMeshStandardMaterial?I.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),K=G&&G.mapping===za?G.image.height:null,V=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=$!==void 0?$.length:0;let de=0;L.morphAttributes.position!==void 0&&(de=1),L.morphAttributes.normal!==void 0&&(de=2),L.morphAttributes.color!==void 0&&(de=3);let k,J,ee,ie;if(V){const Ye=Bn[V];k=Ye.vertexShader,J=Ye.fragmentShader}else k=y.vertexShader,J=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const z=o.getRenderTarget(),Te=y.alphaTest>0,ve=y.clearcoat>0,be=y.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:y.type,vertexShader:k,fragmentShader:J,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:d,outputEncoding:z===null?o.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:Zi,map:!!y.map,matcap:!!y.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===bp,tangentSpaceNormalMap:y.normalMapType===qh,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===qe,clearcoat:ve,clearcoatMap:ve&&!!y.clearcoatMap,clearcoatRoughnessMap:ve&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!y.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!y.iridescenceMap,iridescenceThicknessMap:be&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Rr,alphaMap:!!y.alphaMap,alphaTest:Te,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!L.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:si,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===un,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(_(M,y),b(M,y),M.push(o.outputEncoding)),M.push(y.customProgramCacheKey),M.join()}function _(y,M){y.push(M.precision),y.push(M.outputEncoding),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.combine),y.push(M.vertexUvs),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),y.push(a.mask)}function x(y){const M=g[y.type];let R;if(M){const I=Bn[M];R=Zp.clone(I.uniforms)}else R=y.uniforms;return R}function v(y,M){let R;for(let I=0,U=c.length;I<U;I++){const D=c[I];if(D.cacheKey===M){R=D,++R.usedTimes;break}}return R===void 0&&(R=new ax(o,M,y,r),c.push(R)),R}function S(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function A(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:x,acquireProgram:v,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:A}}function hx(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Hu(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wu(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,d,p,g,f,m){let _=o[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:f,group:m},o[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=f,_.group=m),e++,_}function a(h,d,p,g,f,m){const _=s(h,d,p,g,f,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,d,p,g,f,m){const _=s(h,d,p,g,f,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||dx),n.length>1&&n.sort(d||Hu),i.length>1&&i.sort(d||Hu)}function u(){for(let h=e,d=o.length;h<d;h++){const p=o[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function fx(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new Wu,o.set(n,[s])):i>=r.length?(s=new Wu,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function px(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return o[e.id]=t,t}}}function mx(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let gx=0;function _x(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function xx(o,e){const t=new px,n=mx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new Ve,a=new Ve;function l(u,h){let d=0,p=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,m=0,_=0,b=0,x=0,v=0,S=0,E=0,A=0,y=0;u.sort(_x);const M=h!==!0?Math.PI:1;for(let I=0,U=u.length;I<U;I++){const D=u[I],L=D.color,F=D.intensity,G=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=L.r*F*M,p+=L.g*F*M,g+=L.b*F*M;else if(D.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],F);else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const $=D.shadow,Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=D.shadow.matrix,v++}i.directional[f]=V,f++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(L).multiplyScalar(F*M),V.distance=G,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[_]=V;const $=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&y++),i.spotLightMatrix[_]=$.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=K,E++}_++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(L).multiplyScalar(F),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=V,b++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*M),V.distance=D.distance,V.decay=D.decay,D.castShadow){const $=D.shadow,Z=n.get(D);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=V,m++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(F*M),V.groundColor.copy(D.groundColor).multiplyScalar(F*M),i.hemi[x]=V,x++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==b||R.hemiLength!==x||R.numDirectionalShadows!==v||R.numPointShadows!==S||R.numSpotShadows!==E||R.numSpotMaps!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+A-y,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=y,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=b,R.hemiLength=x,R.numDirectionalShadows=v,R.numPointShadows=S,R.numSpotShadows=E,R.numSpotMaps=A,i.version=gx++)}function c(u,h){let d=0,p=0,g=0,f=0,m=0;const _=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const v=u[b];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),d++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const S=i.rectArea[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),f++}else if(v.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),p++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Xu(o,e){const t=new xx(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function vx(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Xu(o,e),t.set(r,[l])):s>=a.length?(l=new Xu(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yx extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bx extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wx(o,e,t){let n=new zl;const i=new Be,r=new Be,s=new rt,a=new yx({depthPacking:yp}),l=new bx,c={},u=t.maxTextureSize,h={[oi]:un,[un]:oi,[ii]:ii},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new cn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh,this.render=function(v,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const A=o.getRenderTarget(),y=o.getActiveCubeFace(),M=o.getActiveMipmapLevel(),R=o.state;R.setBlending(wi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,U=v.length;I<U;I++){const D=v[I],L=D.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const F=L.getFrameExtents();if(i.multiply(F),r.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,L.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,L.mapSize.y=r.y)),L.map===null){const K=this.type!==fs?{minFilter:Ct,magFilter:Ct}:{};L.map=new Ji(i.x,i.y,K),L.map.texture.name=D.name+".shadowMap",L.camera.updateProjectionMatrix()}o.setRenderTarget(L.map),o.clear();const G=L.getViewportCount();for(let K=0;K<G;K++){const V=L.getViewport(K);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),R.viewport(s),L.updateMatrices(D,K),n=L.getFrustum(),x(S,E,L.camera,D,this.type)}L.isPointLightShadow!==!0&&this.type===fs&&_(L,E),L.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(A,y,M)};function _(v,S){const E=e.update(f);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ji(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(S,null,E,d,f,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(S,null,E,p,f,null)}function b(v,S,E,A,y,M){let R=null;const I=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)R=I;else if(R=E.isPointLight===!0?l:a,o.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=R.uuid,D=S.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let F=L[D];F===void 0&&(F=R.clone(),L[D]=F),R=F}return R.visible=S.visible,R.wireframe=S.wireframe,M===fs?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:h[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=A,R.farDistance=y),R}function x(v,S,E,A,y){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===fs)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const I=e.update(v),U=v.material;if(Array.isArray(U)){const D=I.groups;for(let L=0,F=D.length;L<F;L++){const G=D[L],K=U[G.materialIndex];if(K&&K.visible){const V=b(v,K,A,E.near,E.far,y);o.renderBufferDirect(E,null,I,V,v,G)}}}else if(U.visible){const D=b(v,U,A,E.near,E.far,y);o.renderBufferDirect(E,null,I,D,v,null)}}const R=v.children;for(let I=0,U=R.length;I<U;I++)x(R[I],S,E,A,y)}}function Tx(o,e,t){const n=t.isWebGL2;function i(){let P=!1;const H=new rt;let Q=null;const le=new rt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!P&&(o.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){P=_e},setClear:function(_e,He,dt,vt,En){En===!0&&(_e*=vt,He*=vt,dt*=vt),H.set(_e,He,dt,vt),le.equals(H)===!1&&(o.clearColor(_e,He,dt,vt),le.copy(H))},reset:function(){P=!1,Q=null,le.set(-1,0,0,0)}}}function r(){let P=!1,H=null,Q=null,le=null;return{setTest:function(_e){_e?Te(2929):ve(2929)},setMask:function(_e){H!==_e&&!P&&(o.depthMask(_e),H=_e)},setFunc:function(_e){if(Q!==_e){switch(_e){case zf:o.depthFunc(512);break;case Vf:o.depthFunc(519);break;case Gf:o.depthFunc(513);break;case rl:o.depthFunc(515);break;case Hf:o.depthFunc(514);break;case Wf:o.depthFunc(518);break;case Xf:o.depthFunc(516);break;case qf:o.depthFunc(517);break;default:o.depthFunc(515)}Q=_e}},setLocked:function(_e){P=_e},setClear:function(_e){le!==_e&&(o.clearDepth(_e),le=_e)},reset:function(){P=!1,H=null,Q=null,le=null}}}function s(){let P=!1,H=null,Q=null,le=null,_e=null,He=null,dt=null,vt=null,En=null;return{setTest:function(Ze){P||(Ze?Te(2960):ve(2960))},setMask:function(Ze){H!==Ze&&!P&&(o.stencilMask(Ze),H=Ze)},setFunc:function(Ze,nn,Ot){(Q!==Ze||le!==nn||_e!==Ot)&&(o.stencilFunc(Ze,nn,Ot),Q=Ze,le=nn,_e=Ot)},setOp:function(Ze,nn,Ot){(He!==Ze||dt!==nn||vt!==Ot)&&(o.stencilOp(Ze,nn,Ot),He=Ze,dt=nn,vt=Ot)},setLocked:function(Ze){P=Ze},setClear:function(Ze){En!==Ze&&(o.clearStencil(Ze),En=Ze)},reset:function(){P=!1,H=null,Q=null,le=null,_e=null,He=null,dt=null,vt=null,En=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,f=[],m=null,_=!1,b=null,x=null,v=null,S=null,E=null,A=null,y=null,M=!1,R=null,I=null,U=null,D=null,L=null;const F=o.getParameter(35661);let G=!1,K=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let $=null,Z={};const de=o.getParameter(3088),k=o.getParameter(2978),J=new rt().fromArray(de),ee=new rt().fromArray(k);function ie(P,H,Q){const le=new Uint8Array(4),_e=o.createTexture();o.bindTexture(P,_e),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let He=0;He<Q;He++)o.texImage2D(H+He,0,6408,1,1,0,6408,5121,le);return _e}const z={};z[3553]=ie(3553,3553,1),z[34067]=ie(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(2929),l.setFunc(rl),at(!1),Nt(Uc),Te(2884),lt(wi);function Te(P){d[P]!==!0&&(o.enable(P),d[P]=!0)}function ve(P){d[P]!==!1&&(o.disable(P),d[P]=!1)}function be(P,H){return p[P]!==H?(o.bindFramebuffer(P,H),p[P]=H,n&&(P===36009&&(p[36160]=H),P===36160&&(p[36009]=H)),!0):!1}function ce(P,H){let Q=f,le=!1;if(P)if(Q=g.get(H),Q===void 0&&(Q=[],g.set(H,Q)),P.isWebGLMultipleRenderTargets){const _e=P.texture;if(Q.length!==_e.length||Q[0]!==36064){for(let He=0,dt=_e.length;He<dt;He++)Q[He]=36064+He;Q.length=_e.length,le=!0}}else Q[0]!==36064&&(Q[0]=36064,le=!0);else Q[0]!==1029&&(Q[0]=1029,le=!0);le&&(t.isWebGL2?o.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ye(P){return m!==P?(o.useProgram(P),m=P,!0):!1}const Le={[Sr]:32774,[Rf]:32778,[Lf]:32779};if(n)Le[Vc]=32775,Le[Gc]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Le[Vc]=P.MIN_EXT,Le[Gc]=P.MAX_EXT)}const Ee={[Df]:0,[Pf]:1,[If]:768,[Bh]:770,[Bf]:776,[Uf]:774,[Ff]:772,[Nf]:769,[zh]:771,[kf]:775,[Of]:773};function lt(P,H,Q,le,_e,He,dt,vt){if(P===wi){_===!0&&(ve(3042),_=!1);return}if(_===!1&&(Te(3042),_=!0),P!==Cf){if(P!==b||vt!==M){if((x!==Sr||E!==Sr)&&(o.blendEquation(32774),x=Sr,E=Sr),vt)switch(P){case Rr:o.blendFuncSeparate(1,771,1,771);break;case kc:o.blendFunc(1,1);break;case Bc:o.blendFuncSeparate(0,769,0,1);break;case zc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Rr:o.blendFuncSeparate(770,771,1,771);break;case kc:o.blendFunc(770,1);break;case Bc:o.blendFuncSeparate(0,769,0,1);break;case zc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,S=null,A=null,y=null,b=P,M=vt}return}_e=_e||H,He=He||Q,dt=dt||le,(H!==x||_e!==E)&&(o.blendEquationSeparate(Le[H],Le[_e]),x=H,E=_e),(Q!==v||le!==S||He!==A||dt!==y)&&(o.blendFuncSeparate(Ee[Q],Ee[le],Ee[He],Ee[dt]),v=Q,S=le,A=He,y=dt),b=P,M=!1}function xt(P,H){P.side===ii?ve(2884):Te(2884);let Q=P.side===un;H&&(Q=!Q),at(Q),P.blending===Rr&&P.transparent===!1?lt(wi):lt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const le=P.stencilWrite;c.setTest(le),le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Te(32926):ve(32926)}function at(P){R!==P&&(P?o.frontFace(2304):o.frontFace(2305),R=P)}function Nt(P){P!==Tf?(Te(2884),P!==I&&(P===Uc?o.cullFace(1029):P===Ef?o.cullFace(1028):o.cullFace(1032))):ve(2884),I=P}function st(P){P!==U&&(G&&o.lineWidth(P),U=P)}function Ue(P,H,Q){P?(Te(32823),(D!==H||L!==Q)&&(o.polygonOffset(H,Q),D=H,L=Q)):ve(32823)}function Ft(P){P?Te(3089):ve(3089)}function Ht(P){P===void 0&&(P=33984+F-1),$!==P&&(o.activeTexture(P),$=P)}function C(P,H,Q){Q===void 0&&($===null?Q=33984+F-1:Q=$);let le=Z[Q];le===void 0&&(le={type:void 0,texture:void 0},Z[Q]=le),(le.type!==P||le.texture!==H)&&($!==Q&&(o.activeTexture(Q),$=Q),o.bindTexture(P,H||z[P]),le.type=P,le.texture=H)}function w(){const P=Z[$];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){J.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function ge(P){ee.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function Ne(P,H){let Q=h.get(H);Q===void 0&&(Q=new WeakMap,h.set(H,Q));let le=Q.get(P);le===void 0&&(le=o.getUniformBlockIndex(H,P.name),Q.set(P,le))}function Ke(P,H){const le=h.get(H).get(P);u.get(H)!==le&&(o.uniformBlockBinding(H,le,P.__bindingPointIndex),u.set(H,le))}function mt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},$=null,Z={},p={},g=new WeakMap,f=[],m=null,_=!1,b=null,x=null,v=null,S=null,E=null,A=null,y=null,M=!1,R=null,I=null,U=null,D=null,L=null,J.set(0,0,o.canvas.width,o.canvas.height),ee.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Te,disable:ve,bindFramebuffer:be,drawBuffers:ce,useProgram:Ye,setBlending:lt,setMaterial:xt,setFlipSided:at,setCullFace:Nt,setLineWidth:st,setPolygonOffset:Ue,setScissorTest:Ft,activeTexture:Ht,bindTexture:C,unbindTexture:w,compressedTexImage2D:q,compressedTexImage3D:te,texImage2D:Se,texImage3D:me,updateUBOMapping:Ne,uniformBlockBinding:Ke,texStorage2D:Y,texStorage3D:ye,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:Ae,compressedTexSubImage3D:oe,scissor:we,viewport:ge,reset:mt}}function Ex(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,w){return _?new OffscreenCanvas(C,w):Es("canvas")}function x(C,w,q,te){let ne=1;if((C.width>te||C.height>te)&&(ne=te/Math.max(C.width,C.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=w?Ca:Math.floor,Ae=se(ne*C.width),oe=se(ne*C.height);f===void 0&&(f=b(Ae,oe));const Y=q?b(Ae,oe):f;return Y.width=Ae,Y.height=oe,Y.getContext("2d").drawImage(C,0,0,Ae,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ae+"x"+oe+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return hl(C.width)&&hl(C.height)}function S(C){return a?!1:C.wrapS!==yn||C.wrapT!==yn||C.minFilter!==Ct&&C.minFilter!==Zt}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ct&&C.minFilter!==Zt}function A(C){o.generateMipmap(C)}function y(C,w,q,te,ne=!1){if(a===!1)return w;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=w;return w===6403&&(q===5126&&(se=33326),q===5131&&(se=33325),q===5121&&(se=33321)),w===33319&&(q===5126&&(se=33328),q===5131&&(se=33327),q===5121&&(se=33323)),w===6408&&(q===5126&&(se=34836),q===5131&&(se=34842),q===5121&&(se=te===qe&&ne===!1?35907:32856),q===32819&&(se=32854),q===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function M(C,w,q){return E(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==Zt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){return C===Ct||C===ol||C===ya?9728:9729}function I(C){const w=C.target;w.removeEventListener("dispose",I),D(w),w.isVideoTexture&&g.delete(w)}function U(C){const w=C.target;w.removeEventListener("dispose",U),F(w)}function D(C){const w=n.get(C);if(w.__webglInit===void 0)return;const q=C.source,te=m.get(q);if(te){const ne=te[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(C),Object.keys(te).length===0&&m.delete(q)}n.remove(C)}function L(C){const w=n.get(C);o.deleteTexture(w.__webglTexture);const q=C.source,te=m.get(q);delete te[w.__cacheKey],s.memory.textures--}function F(C){const w=C.texture,q=n.get(C),te=n.get(w);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(q.__webglFramebuffer[ne]),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ne=0;ne<q.__webglColorRenderbuffer.length;ne++)q.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(q.__webglColorRenderbuffer[ne]);q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,se=w.length;ne<se;ne++){const Ae=n.get(w[ne]);Ae.__webglTexture&&(o.deleteTexture(Ae.__webglTexture),s.memory.textures--),n.remove(w[ne])}n.remove(w),n.remove(C)}let G=0;function K(){G=0}function V(){const C=G;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),G+=1,C}function $(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function Z(C,w){const q=n.get(C);if(C.isVideoTexture&&Ft(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(q,C,w);return}}t.bindTexture(3553,q.__webglTexture,33984+w)}function de(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ve(q,C,w);return}t.bindTexture(35866,q.__webglTexture,33984+w)}function k(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ve(q,C,w);return}t.bindTexture(32879,q.__webglTexture,33984+w)}function J(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){be(q,C,w);return}t.bindTexture(34067,q.__webglTexture,33984+w)}const ee={[Ur]:10497,[yn]:33071,[Ea]:33648},ie={[Ct]:9728,[ol]:9984,[ya]:9986,[Zt]:9729,[Hh]:9985,[Yi]:9987};function z(C,w,q){if(q?(o.texParameteri(C,10242,ee[w.wrapS]),o.texParameteri(C,10243,ee[w.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ee[w.wrapR]),o.texParameteri(C,10240,ie[w.magFilter]),o.texParameteri(C,10241,ie[w.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(w.wrapS!==yn||w.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,R(w.magFilter)),o.texParameteri(C,10241,R(w.minFilter)),w.minFilter!==Ct&&w.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ct||w.minFilter!==ya&&w.minFilter!==Yi||w.type===yi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ms&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Te(C,w){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",I));const te=w.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const se=$(w);if(se!==C.__cacheKey){ne[se]===void 0&&(ne[se]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,q=!0),ne[se].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&L(w)),C.__cacheKey=se,C.__webglTexture=ne[se].texture}return q}function ve(C,w,q){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ne=Te(C,w),se=w.source;t.bindTexture(te,C.__webglTexture,33984+q);const Ae=n.get(se);if(se.version!==Ae.__version||ne===!0){t.activeTexture(33984+q),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const oe=S(w)&&v(w.image)===!1;let Y=x(w.image,oe,!1,u);Y=Ht(w,Y);const ye=v(Y)||a,Se=r.convert(w.format,w.encoding);let me=r.convert(w.type),we=y(w.internalFormat,Se,me,w.encoding,w.isVideoTexture);z(te,w,ye);let ge;const Ne=w.mipmaps,Ke=a&&w.isVideoTexture!==!0,mt=Ae.__version===void 0||ne===!0,P=M(w,Y,ye);if(w.isDepthTexture)we=6402,a?w.type===yi?we=36012:w.type===Bi?we=33190:w.type===Lr?we=35056:we=33189:w.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Hi&&we===6402&&w.type!==Wh&&w.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Bi,me=r.convert(w.type)),w.format===kr&&we===6402&&(we=34041,w.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Lr,me=r.convert(w.type))),mt&&(Ke?t.texStorage2D(3553,1,we,Y.width,Y.height):t.texImage2D(3553,0,we,Y.width,Y.height,0,Se,me,null));else if(w.isDataTexture)if(Ne.length>0&&ye){Ke&&mt&&t.texStorage2D(3553,P,we,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)ge=Ne[H],Ke?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,Se,me,ge.data):t.texImage2D(3553,H,we,ge.width,ge.height,0,Se,me,ge.data);w.generateMipmaps=!1}else Ke?(mt&&t.texStorage2D(3553,P,we,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Se,me,Y.data)):t.texImage2D(3553,0,we,Y.width,Y.height,0,Se,me,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ke&&mt&&t.texStorage3D(35866,P,we,Ne[0].width,Ne[0].height,Y.depth);for(let H=0,Q=Ne.length;H<Q;H++)ge=Ne[H],w.format!==bn?Se!==null?Ke?t.compressedTexSubImage3D(35866,H,0,0,0,ge.width,ge.height,Y.depth,Se,ge.data,0,0):t.compressedTexImage3D(35866,H,we,ge.width,ge.height,Y.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(35866,H,0,0,0,ge.width,ge.height,Y.depth,Se,me,ge.data):t.texImage3D(35866,H,we,ge.width,ge.height,Y.depth,0,Se,me,ge.data)}else{Ke&&mt&&t.texStorage2D(3553,P,we,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)ge=Ne[H],w.format!==bn?Se!==null?Ke?t.compressedTexSubImage2D(3553,H,0,0,ge.width,ge.height,Se,ge.data):t.compressedTexImage2D(3553,H,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,Se,me,ge.data):t.texImage2D(3553,H,we,ge.width,ge.height,0,Se,me,ge.data)}else if(w.isDataArrayTexture)Ke?(mt&&t.texStorage3D(35866,P,we,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Se,me,Y.data)):t.texImage3D(35866,0,we,Y.width,Y.height,Y.depth,0,Se,me,Y.data);else if(w.isData3DTexture)Ke?(mt&&t.texStorage3D(32879,P,we,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Se,me,Y.data)):t.texImage3D(32879,0,we,Y.width,Y.height,Y.depth,0,Se,me,Y.data);else if(w.isFramebufferTexture){if(mt)if(Ke)t.texStorage2D(3553,P,we,Y.width,Y.height);else{let H=Y.width,Q=Y.height;for(let le=0;le<P;le++)t.texImage2D(3553,le,we,H,Q,0,Se,me,null),H>>=1,Q>>=1}}else if(Ne.length>0&&ye){Ke&&mt&&t.texStorage2D(3553,P,we,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)ge=Ne[H],Ke?t.texSubImage2D(3553,H,0,0,Se,me,ge):t.texImage2D(3553,H,we,Se,me,ge);w.generateMipmaps=!1}else Ke?(mt&&t.texStorage2D(3553,P,we,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Se,me,Y)):t.texImage2D(3553,0,we,Se,me,Y);E(w,ye)&&A(te),Ae.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function be(C,w,q){if(w.image.length!==6)return;const te=Te(C,w),ne=w.source;t.bindTexture(34067,C.__webglTexture,33984+q);const se=n.get(ne);if(ne.version!==se.__version||te===!0){t.activeTexture(33984+q),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let H=0;H<6;H++)!Ae&&!oe?Y[H]=x(w.image[H],!1,!0,c):Y[H]=oe?w.image[H].image:w.image[H],Y[H]=Ht(w,Y[H]);const ye=Y[0],Se=v(ye)||a,me=r.convert(w.format,w.encoding),we=r.convert(w.type),ge=y(w.internalFormat,me,we,w.encoding),Ne=a&&w.isVideoTexture!==!0,Ke=se.__version===void 0||te===!0;let mt=M(w,ye,Se);z(34067,w,Se);let P;if(Ae){Ne&&Ke&&t.texStorage2D(34067,mt,ge,ye.width,ye.height);for(let H=0;H<6;H++){P=Y[H].mipmaps;for(let Q=0;Q<P.length;Q++){const le=P[Q];w.format!==bn?me!==null?Ne?t.compressedTexSubImage2D(34069+H,Q,0,0,le.width,le.height,me,le.data):t.compressedTexImage2D(34069+H,Q,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+H,Q,0,0,le.width,le.height,me,we,le.data):t.texImage2D(34069+H,Q,ge,le.width,le.height,0,me,we,le.data)}}}else{P=w.mipmaps,Ne&&Ke&&(P.length>0&&mt++,t.texStorage2D(34067,mt,ge,Y[0].width,Y[0].height));for(let H=0;H<6;H++)if(oe){Ne?t.texSubImage2D(34069+H,0,0,0,Y[H].width,Y[H].height,me,we,Y[H].data):t.texImage2D(34069+H,0,ge,Y[H].width,Y[H].height,0,me,we,Y[H].data);for(let Q=0;Q<P.length;Q++){const _e=P[Q].image[H].image;Ne?t.texSubImage2D(34069+H,Q+1,0,0,_e.width,_e.height,me,we,_e.data):t.texImage2D(34069+H,Q+1,ge,_e.width,_e.height,0,me,we,_e.data)}}else{Ne?t.texSubImage2D(34069+H,0,0,0,me,we,Y[H]):t.texImage2D(34069+H,0,ge,me,we,Y[H]);for(let Q=0;Q<P.length;Q++){const le=P[Q];Ne?t.texSubImage2D(34069+H,Q+1,0,0,me,we,le.image[H]):t.texImage2D(34069+H,Q+1,ge,me,we,le.image[H])}}}E(w,Se)&&A(34067),se.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ce(C,w,q,te,ne){const se=r.convert(q.format,q.encoding),Ae=r.convert(q.type),oe=y(q.internalFormat,se,Ae,q.encoding);n.get(w).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,oe,w.width,w.height,w.depth,0,se,Ae,null):t.texImage2D(ne,0,oe,w.width,w.height,0,se,Ae,null)),t.bindFramebuffer(36160,C),Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(q).__webglTexture,0,st(w)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,te,ne,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ye(C,w,q){if(o.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(q||Ue(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===yi?te=36012:ne.type===Bi&&(te=33190));const se=st(w);Ue(w)?d.renderbufferStorageMultisampleEXT(36161,se,te,w.width,w.height):o.renderbufferStorageMultisample(36161,se,te,w.width,w.height)}else o.renderbufferStorage(36161,te,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const te=st(w);q&&Ue(w)===!1?o.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):Ue(w)?d.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<te.length;ne++){const se=te[ne],Ae=r.convert(se.format,se.encoding),oe=r.convert(se.type),Y=y(se.internalFormat,Ae,oe,se.encoding),ye=st(w);q&&Ue(w)===!1?o.renderbufferStorageMultisample(36161,ye,Y,w.width,w.height):Ue(w)?d.renderbufferStorageMultisampleEXT(36161,ye,Y,w.width,w.height):o.renderbufferStorage(36161,Y,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function Le(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,ne=st(w);if(w.depthTexture.format===Hi)Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):o.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===kr)Ue(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):o.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const w=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Le(w.__webglFramebuffer,C)}else if(q){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=o.createRenderbuffer(),Ye(w.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Ye(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function lt(C,w,q){const te=n.get(C);w!==void 0&&ce(te.__webglFramebuffer,C,C.texture,36064,3553),q!==void 0&&Ee(C)}function xt(C){const w=C.texture,q=n.get(C),te=n.get(w);C.addEventListener("dispose",U),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=w.version,s.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Ae=v(C)||a;if(ne){q.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)q.__webglFramebuffer[oe]=o.createFramebuffer()}else{if(q.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const oe=C.texture;for(let Y=0,ye=oe.length;Y<ye;Y++){const Se=n.get(oe[Y]);Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ue(C)===!1){const oe=se?w:[w];q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let Y=0;Y<oe.length;Y++){const ye=oe[Y];q.__webglColorRenderbuffer[Y]=o.createRenderbuffer(),o.bindRenderbuffer(36161,q.__webglColorRenderbuffer[Y]);const Se=r.convert(ye.format,ye.encoding),me=r.convert(ye.type),we=y(ye.internalFormat,Se,me,ye.encoding,C.isXRRenderTarget===!0),ge=st(C);o.renderbufferStorageMultisample(36161,ge,we,C.width,C.height),o.framebufferRenderbuffer(36160,36064+Y,36161,q.__webglColorRenderbuffer[Y])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ye(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),z(34067,w,Ae);for(let oe=0;oe<6;oe++)ce(q.__webglFramebuffer[oe],C,w,36064,34069+oe);E(w,Ae)&&A(34067),t.unbindTexture()}else if(se){const oe=C.texture;for(let Y=0,ye=oe.length;Y<ye;Y++){const Se=oe[Y],me=n.get(Se);t.bindTexture(3553,me.__webglTexture),z(3553,Se,Ae),ce(q.__webglFramebuffer,C,Se,36064+Y,3553),E(Se,Ae)&&A(3553)}t.unbindTexture()}else{let oe=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,te.__webglTexture),z(oe,w,Ae),ce(q.__webglFramebuffer,C,w,36064,oe),E(w,Ae)&&A(oe),t.unbindTexture()}C.depthBuffer&&Ee(C)}function at(C){const w=v(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ne=q.length;te<ne;te++){const se=q[te];if(E(se,w)){const Ae=C.isWebGLCubeRenderTarget?34067:3553,oe=n.get(se).__webglTexture;t.bindTexture(Ae,oe),A(Ae),t.unbindTexture()}}}function Nt(C){if(a&&C.samples>0&&Ue(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,te=C.height;let ne=16384;const se=[],Ae=C.stencilBuffer?33306:36096,oe=n.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){se.push(36064+ye),C.depthBuffer&&se.push(Ae);const Se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Se===!1&&(C.depthBuffer&&(ne|=256),C.stencilBuffer&&(ne|=1024)),Y&&o.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[ye]),Se===!0&&(o.invalidateFramebuffer(36008,[Ae]),o.invalidateFramebuffer(36009,[Ae])),Y){const me=n.get(w[ye]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,me,0)}o.blitFramebuffer(0,0,q,te,0,0,q,te,ne,9728),p&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ye,36161,oe.__webglColorRenderbuffer[ye]);const Se=n.get(w[ye]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ye,3553,Se,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function st(C){return Math.min(h,C.samples)}function Ue(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ft(C){const w=s.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function Ht(C,w){const q=C.encoding,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ul||q!==Zi&&(q===qe?a===!1?e.has("EXT_sRGB")===!0&&te===bn?(C.format=ul,C.minFilter=Zt,C.generateMipmaps=!1):w=Zh.sRGBToLinear(w):(te!==bn||ne!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=de,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=lt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function Ax(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===Ki)return 5121;if(r===ip)return 32819;if(r===rp)return 32820;if(r===ep)return 5120;if(r===tp)return 5122;if(r===Wh)return 5123;if(r===np)return 5124;if(r===Bi)return 5125;if(r===yi)return 5126;if(r===Ms)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===sp)return 6406;if(r===bn)return 6408;if(r===ap)return 6409;if(r===op)return 6410;if(r===Hi)return 6402;if(r===kr)return 34041;if(r===ul)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===lp)return 6403;if(r===cp)return 36244;if(r===up)return 33319;if(r===hp)return 33320;if(r===dp)return 36249;if(r===lo||r===co||r===uo||r===ho)if(s===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===uo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hc||r===Wc||r===Xc||r===qc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jc||r===Yc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===jc)return s===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yc)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kc||r===Zc||r===Jc||r===$c||r===Qc||r===eu||r===tu||r===nu||r===iu||r===ru||r===su||r===au||r===ou||r===lu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kc)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zc)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jc)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$c)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qc)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eu)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tu)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nu)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===iu)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ru)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===su)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===au)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ou)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lu)return s===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fo)return s===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===pp||r===cu||r===uu||r===hu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===fo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===cu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Cx extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rx={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const f of e.hand.values()){const m=t.getJointPose(f,n),_=this._getHandJoint(c,f);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lx extends It{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hi&&(n=Bi),n===void 0&&u===kr&&(n=Lr),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Dx extends tr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const f=t.getContextAttributes();let m=null,_=null;const b=[],x=[],v=new Set,S=new Map,E=new Dt;E.layers.enable(1),E.viewport=new rt;const A=new Dt;A.layers.enable(2),A.viewport=new rt;const y=[E,A],M=new Cx;M.layers.enable(1),M.layers.enable(2);let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=b[k];return J===void 0&&(J=new Bo,b[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=b[k];return J===void 0&&(J=new Bo,b[k]=J),J.getGripSpace()},this.getHand=function(k){let J=b[k];return J===void 0&&(J=new Bo,b[k]=J),J.getHandSpace()};function U(k){const J=x.indexOf(k.inputSource);if(J===-1)return;const ee=b[J];ee!==void 0&&ee.dispatchEvent({type:k.type,data:k.inputSource})}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",L);for(let k=0;k<b.length;k++){const J=x[k];J!==null&&(x[k]=null,b[k].disconnect(J))}R=null,I=null,e.setRenderTarget(m),p=null,d=null,h=null,i=null,_=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",L),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),_=new Ji(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Ki,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let J=null,ee=null,ie=null;f.depth&&(ie=f.stencil?35056:33190,J=f.stencil?kr:Hi,ee=f.stencil?Lr:Bi);const z={colorFormat:32856,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(z),i.updateRenderState({layers:[d]}),_=new Ji(d.textureWidth,d.textureHeight,{format:bn,type:Ki,depthTexture:new Lx(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const Te=e.properties.get(_);Te.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(k){for(let J=0;J<k.removed.length;J++){const ee=k.removed[J],ie=x.indexOf(ee);ie>=0&&(x[ie]=null,b[ie].disconnect(ee))}for(let J=0;J<k.added.length;J++){const ee=k.added[J];let ie=x.indexOf(ee);if(ie===-1){for(let Te=0;Te<b.length;Te++)if(Te>=x.length){x.push(ee),ie=Te;break}else if(x[Te]===null){x[Te]=ee,ie=Te;break}if(ie===-1)break}const z=b[ie];z&&z.connect(ee)}}const F=new N,G=new N;function K(k,J,ee){F.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const ie=F.distanceTo(G),z=J.projectionMatrix.elements,Te=ee.projectionMatrix.elements,ve=z[14]/(z[10]-1),be=z[14]/(z[10]+1),ce=(z[9]+1)/z[5],Ye=(z[9]-1)/z[5],Le=(z[8]-1)/z[0],Ee=(Te[8]+1)/Te[0],lt=ve*Le,xt=ve*Ee,at=ie/(-Le+Ee),Nt=at*-Le;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Nt),k.translateZ(at),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const st=ve+at,Ue=be+at,Ft=lt-Nt,Ht=xt+(ie-Nt),C=ce*be/Ue*st,w=Ye*be/Ue*st;k.projectionMatrix.makePerspective(Ft,Ht,C,w,st,Ue)}function V(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;M.near=A.near=E.near=k.near,M.far=A.far=E.far=k.far,(R!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,I=M.far);const J=k.parent,ee=M.cameras;V(M,J);for(let z=0;z<ee.length;z++)V(ee[z],J);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),k.matrix.copy(M.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ie=k.children;for(let z=0,Te=ie.length;z<Te;z++)ie[z].updateMatrixWorld(!0);ee.length===2?K(M,E,A):M.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return v};let $=null;function Z(k,J){if(u=J.getViewerPose(c||s),g=J,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ie=!1;ee.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let z=0;z<ee.length;z++){const Te=ee[z];let ve=null;if(p!==null)ve=p.getViewport(Te);else{const ce=h.getViewSubImage(d,Te);ve=ce.viewport,z===0&&(e.setRenderTargetTextures(_,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(_))}let be=y[z];be===void 0&&(be=new Dt,be.layers.enable(z),be.viewport=new rt,y[z]=be),be.matrix.fromArray(Te.transform.matrix),be.projectionMatrix.fromArray(Te.projectionMatrix),be.viewport.set(ve.x,ve.y,ve.width,ve.height),z===0&&M.matrix.copy(be.matrix),ie===!0&&M.cameras.push(be)}}for(let ee=0;ee<b.length;ee++){const ie=x[ee],z=b[ee];ie!==null&&z!==void 0&&z.update(ie,J,c||s)}if($&&$(k,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let ee=null;for(const ie of v)J.detectedPlanes.has(ie)||(ee===null&&(ee=[]),ee.push(ie));if(ee!==null)for(const ie of ee)v.delete(ie),S.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of J.detectedPlanes)if(!v.has(ie))v.add(ie),S.set(ie,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const z=S.get(ie);ie.lastChangedTime>z&&(S.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}g=null}const de=new rd;de.setAnimationLoop(Z),this.setAnimationLoop=function(k){$=k},this.dispose=function(){}}}function Px(o,e){function t(f,m){m.color.getRGB(f.fogColor.value,td(o)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function n(f,m,_,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(f,m):m.isMeshToonMaterial?(i(f,m),u(f,m)):m.isMeshPhongMaterial?(i(f,m),c(f,m)):m.isMeshStandardMaterial?(i(f,m),h(f,m),m.isMeshPhysicalMaterial&&d(f,m,x)):m.isMeshMatcapMaterial?(i(f,m),p(f,m)):m.isMeshDepthMaterial?i(f,m):m.isMeshDistanceMaterial?(i(f,m),g(f,m)):m.isMeshNormalMaterial?i(f,m):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&s(f,m)):m.isPointsMaterial?a(f,m,_,b):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===un&&(f.bumpScale.value*=-1)),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===un&&f.normalScale.value.negate()),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const v=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uv2Transform.value.copy(x.matrix))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function s(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function a(f,m,_,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=b*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===un&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ix(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(b,x){const v=x.program;n.uniformBlockBinding(b,v)}function c(b,x){let v=i[b.id];v===void 0&&(g(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(b,S);const E=e.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function u(b){const x=h();b.__bindingPointIndex=x;const v=o.createBuffer(),S=b.__size,E=b.usage;return o.bindBuffer(35345,v),o.bufferData(35345,S,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,v),v}function h(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=i[b.id],v=b.uniforms,S=b.__cache;o.bindBuffer(35345,x);for(let E=0,A=v.length;E<A;E++){const y=v[E];if(p(y,E,S)===!0){const M=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let I=0;for(let U=0;U<R.length;U++){const D=R[U],L=f(D);typeof D=="number"?(y.__data[0]=D,o.bufferSubData(35345,M+I,y.__data)):D.isMatrix3?(y.__data[0]=D.elements[0],y.__data[1]=D.elements[1],y.__data[2]=D.elements[2],y.__data[3]=D.elements[0],y.__data[4]=D.elements[3],y.__data[5]=D.elements[4],y.__data[6]=D.elements[5],y.__data[7]=D.elements[0],y.__data[8]=D.elements[6],y.__data[9]=D.elements[7],y.__data[10]=D.elements[8],y.__data[11]=D.elements[0]):(D.toArray(y.__data,I),I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,M,y.__data)}}o.bindBuffer(35345,null)}function p(b,x,v){const S=b.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const E=Array.isArray(S)?S:[S],A=[];for(let y=0;y<E.length;y++)A.push(E[y].clone());v[x]=A}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const E=Array.isArray(v[x])?v[x]:[v[x]],A=Array.isArray(S)?S:[S];for(let y=0;y<E.length;y++){const M=E[y];if(M.equals(A[y])===!1)return M.copy(A[y]),!0}}return!1}function g(b){const x=b.uniforms;let v=0;const S=16;let E=0;for(let A=0,y=x.length;A<y;A++){const M=x[A],R={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let U=0,D=I.length;U<D;U++){const L=I[U],F=f(L);R.boundary+=F.boundary,R.storage+=F.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,A>0){E=v%S;const U=S-E;E!==0&&U-R.boundary<0&&(v+=S-E,M.__offset=v)}v+=R.storage}return E=v%S,E>0&&(v+=S-E),b.__size=v,b.__cache={},this}function f(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function _(){for(const b in i)o.deleteBuffer(i[b]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Nx(){const o=Es("canvas");return o.style.display="block",o}function Xa(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Nx(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const f=this;let m=!1,_=0,b=0,x=null,v=-1,S=null;const E=new rt,A=new rt;let y=null,M=e.width,R=e.height,I=1,U=null,D=null;const L=new rt(0,0,M,R),F=new rt(0,0,M,R);let G=!1;const K=new zl;let V=!1,$=!1,Z=null;const de=new Ve,k=new Be,J=new N,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return x===null?I:1}let z=t;function Te(T,B){for(let X=0;X<T.length;X++){const O=T[X],W=e.getContext(O,B);if(W!==null)return W}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&B.shift(),z=Te(B,T),z===null)throw Te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ve,be,ce,Ye,Le,Ee,lt,xt,at,Nt,st,Ue,Ft,Ht,C,w,q,te,ne,se,Ae,oe,Y,ye;function Se(){ve=new X_(z),be=new B_(z,ve,o),ve.init(be),oe=new Ax(z,ve,be),ce=new Tx(z,ve,be),Ye=new Y_,Le=new hx,Ee=new Ex(z,ve,ce,Le,be,oe,Ye),lt=new V_(f),xt=new W_(f),at=new im(z,be),Y=new U_(z,ve,at,be),Nt=new q_(z,at,Ye,Y),st=new $_(z,Nt,at,Ye),ne=new J_(z,be,Ee),w=new z_(Le),Ue=new ux(f,lt,xt,ve,be,Y,w),Ft=new Px(f,Le),Ht=new fx,C=new vx(ve,be),te=new O_(f,lt,xt,ce,st,u,s),q=new wx(f,st,be),ye=new Ix(z,Ye,be,ce),se=new k_(z,ve,Ye,be),Ae=new j_(z,ve,Ye,be),Ye.programs=Ue.programs,f.capabilities=be,f.extensions=ve,f.properties=Le,f.renderLists=Ht,f.shadowMap=q,f.state=ce,f.info=Ye}Se();const me=new Dx(f,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(M,R,!1))},this.getSize=function(T){return T.set(M,R)},this.setSize=function(T,B,X){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,R=B,e.width=Math.floor(T*I),e.height=Math.floor(B*I),X!==!1&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(M*I,R*I).floor()},this.setDrawingBufferSize=function(T,B,X){M=T,R=B,I=X,e.width=Math.floor(T*X),e.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,B,X,O){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,B,X,O),ce.viewport(E.copy(L).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,B,X,O){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,B,X,O),ce.scissor(A.copy(F).multiplyScalar(I).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){ce.setScissorTest(G=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,B=!0,X=!0){let O=0;T&&(O|=16384),B&&(O|=256),X&&(O|=1024),z.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Ht.dispose(),C.dispose(),Le.dispose(),lt.dispose(),xt.dispose(),st.dispose(),Y.dispose(),ye.dispose(),Ue.dispose(),me.dispose(),me.removeEventListener("sessionstart",le),me.removeEventListener("sessionend",_e),Z&&(Z.dispose(),Z=null),He.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=Ye.autoReset,B=q.enabled,X=q.autoUpdate,O=q.needsUpdate,W=q.type;Se(),Ye.autoReset=T,q.enabled=B,q.autoUpdate=X,q.needsUpdate=O,q.type=W}function Ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const B=T.target;B.removeEventListener("dispose",Ke),mt(B)}function mt(T){P(T),Le.remove(T)}function P(T){const B=Le.get(T).programs;B!==void 0&&(B.forEach(function(X){Ue.releaseProgram(X)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,O,W,Me){B===null&&(B=ee);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,Pe=fn(T,B,X,O,W);ce.setMaterial(O,Ce);let Re=X.index,De=1;O.wireframe===!0&&(Re=Nt.getWireframeAttribute(X),De=2);const Ie=X.drawRange,ke=X.attributes.position;let ot=Ie.start*De,Lt=(Ie.start+Ie.count)*De;Me!==null&&(ot=Math.max(ot,Me.start*De),Lt=Math.min(Lt,(Me.start+Me.count)*De)),Re!==null?(ot=Math.max(ot,0),Lt=Math.min(Lt,Re.count)):ke!=null&&(ot=Math.max(ot,0),Lt=Math.min(Lt,ke.count));const mn=Lt-ot;if(mn<0||mn===1/0)return;Y.setup(W,O,Pe,X,Re);let Kt,ze=se;if(Re!==null&&(Kt=at.get(Re),ze=Ae,ze.setIndex(Kt)),W.isMesh)O.wireframe===!0?(ce.setLineWidth(O.wireframeLinewidth*ie()),ze.setMode(1)):ze.setMode(4);else if(W.isLine){let ue=O.linewidth;ue===void 0&&(ue=1),ce.setLineWidth(ue*ie()),W.isLineSegments?ze.setMode(1):W.isLineLoop?ze.setMode(2):ze.setMode(3)}else W.isPoints?ze.setMode(0):W.isSprite&&ze.setMode(4);if(W.isInstancedMesh)ze.renderInstances(ot,mn,W.count);else if(X.isInstancedBufferGeometry){const ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,ue);ze.renderInstances(ot,mn,Mt)}else ze.render(ot,mn)},this.compile=function(T,B){function X(O,W,Me){O.transparent===!0&&O.side===ii&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,Ot(O,W,Me),O.side=oi,O.needsUpdate=!0,Ot(O,W,Me),O.side=ii):Ot(O,W,Me)}d=C.get(T),d.init(),g.push(d),T.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(O){const W=O.material;if(W)if(Array.isArray(W))for(let Me=0;Me<W.length;Me++){const Ce=W[Me];X(Ce,T,O)}else X(W,T,O)}),g.pop(),d=null};let H=null;function Q(T){H&&H(T)}function le(){He.stop()}function _e(){He.start()}const He=new rd;He.setAnimationLoop(Q),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(T){H=T,me.setAnimationLoop(T),T===null?He.stop():He.start()},me.addEventListener("sessionstart",le),me.addEventListener("sessionend",_e),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,B,x),d=C.get(T,g.length),d.init(),g.push(d),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(de),$=this.localClippingEnabled,V=w.init(this.clippingPlanes,$),h=Ht.get(T,p.length),h.init(),p.push(h),dt(T,B,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(U,D),V===!0&&w.beginShadows();const X=d.state.shadowsArray;if(q.render(X,T,B),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,T),d.setupLights(f.physicallyCorrectLights),B.isArrayCamera){const O=B.cameras;for(let W=0,Me=O.length;W<Me;W++){const Ce=O[W];vt(h,T,Ce,Ce.viewport)}}else vt(h,T,B);x!==null&&(Ee.updateMultisampleRenderTarget(x),Ee.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(f,T,B),Y.resetDefaultState(),v=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function dt(T,B,X,O){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){O&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Ce=st.update(T),Pe=T.material;Pe.visible&&h.push(T,Ce,Pe,X,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ye.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ye.render.frame),!T.frustumCulled||K.intersectsObject(T))){O&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Ce=st.update(T),Pe=T.material;if(Array.isArray(Pe)){const Re=Ce.groups;for(let De=0,Ie=Re.length;De<Ie;De++){const ke=Re[De],ot=Pe[ke.materialIndex];ot&&ot.visible&&h.push(T,Ce,ot,X,J.z,ke)}}else Pe.visible&&h.push(T,Ce,Pe,X,J.z,null)}}const Me=T.children;for(let Ce=0,Pe=Me.length;Ce<Pe;Ce++)dt(Me[Ce],B,X,O)}function vt(T,B,X,O){const W=T.opaque,Me=T.transmissive,Ce=T.transparent;d.setupLightsView(X),V===!0&&w.setGlobalState(f.clippingPlanes,X),Me.length>0&&En(W,B,X),O&&ce.viewport(E.copy(O)),W.length>0&&Ze(W,B,X),Me.length>0&&Ze(Me,B,X),Ce.length>0&&Ze(Ce,B,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function En(T,B,X){const O=be.isWebGL2;Z===null&&(Z=new Ji(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ms:Ki,minFilter:Yi,samples:O&&r===!0?4:0})),f.getDrawingBufferSize(k),O?Z.setSize(k.x,k.y):Z.setSize(Ca(k.x),Ca(k.y));const W=f.getRenderTarget();f.setRenderTarget(Z),f.clear();const Me=f.toneMapping;f.toneMapping=si,Ze(T,B,X),f.toneMapping=Me,Ee.updateMultisampleRenderTarget(Z),Ee.updateRenderTargetMipmap(Z),f.setRenderTarget(W)}function Ze(T,B,X){const O=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Me=T.length;W<Me;W++){const Ce=T[W],Pe=Ce.object,Re=Ce.geometry,De=O===null?Ce.material:O,Ie=Ce.group;Pe.layers.test(X.layers)&&nn(Pe,B,X,Re,De,Ie)}}function nn(T,B,X,O,W,Me){T.onBeforeRender(f,B,X,O,W,Me),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(f,B,X,O,T,Me),W.transparent===!0&&W.side===ii&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,f.renderBufferDirect(X,B,O,W,T,Me),W.side=oi,W.needsUpdate=!0,f.renderBufferDirect(X,B,O,W,T,Me),W.side=ii):f.renderBufferDirect(X,B,O,W,T,Me),T.onAfterRender(f,B,X,O,W,Me)}function Ot(T,B,X){B.isScene!==!0&&(B=ee);const O=Le.get(T),W=d.state.lights,Me=d.state.shadowsArray,Ce=W.state.version,Pe=Ue.getParameters(T,W.state,Me,B,X),Re=Ue.getProgramCacheKey(Pe);let De=O.programs;O.environment=T.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(T.isMeshStandardMaterial?xt:lt).get(T.envMap||O.environment),De===void 0&&(T.addEventListener("dispose",Ke),De=new Map,O.programs=De);let Ie=De.get(Re);if(Ie!==void 0){if(O.currentProgram===Ie&&O.lightsStateVersion===Ce)return rr(T,Pe),Ie}else Pe.uniforms=Ue.getUniforms(T),T.onBuild(X,Pe,f),T.onBeforeCompile(Pe,f),Ie=Ue.acquireProgram(Pe,Re),De.set(Re,Ie),O.uniforms=Pe.uniforms;const ke=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=w.uniform),rr(T,Pe),O.needsLights=pn(T),O.lightsStateVersion=Ce,O.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix);const ot=Ie.getUniforms(),Lt=Ma.seqWithValue(ot.seq,ke);return O.currentProgram=Ie,O.uniformsList=Lt,Ie}function rr(T,B){const X=Le.get(T);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function fn(T,B,X,O,W){B.isScene!==!0&&(B=ee),Ee.resetTextureUnits();const Me=B.fog,Ce=O.isMeshStandardMaterial?B.environment:null,Pe=x===null?f.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Zi,Re=(O.isMeshStandardMaterial?xt:lt).get(O.envMap||Ce),De=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!O.normalMap&&!!X.attributes.tangent,ke=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,Lt=!!X.morphAttributes.color,mn=O.toneMapped?f.toneMapping:si,Kt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ze=Kt!==void 0?Kt.length:0,ue=Le.get(O),Mt=d.state.lights;if(V===!0&&($===!0||T!==S)){const kt=T===S&&O.id===v;w.setState(O,T,kt)}let $e=!1;O.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Mt.state.version||ue.outputEncoding!==Pe||W.isInstancedMesh&&ue.instancing===!1||!W.isInstancedMesh&&ue.instancing===!0||W.isSkinnedMesh&&ue.skinning===!1||!W.isSkinnedMesh&&ue.skinning===!0||ue.envMap!==Re||O.fog===!0&&ue.fog!==Me||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==w.numPlanes||ue.numIntersection!==w.numIntersection)||ue.vertexAlphas!==De||ue.vertexTangents!==Ie||ue.morphTargets!==ke||ue.morphNormals!==ot||ue.morphColors!==Lt||ue.toneMapping!==mn||be.isWebGL2===!0&&ue.morphTargetsCount!==ze)&&($e=!0):($e=!0,ue.__version=O.version);let Ut=ue.currentProgram;$e===!0&&(Ut=Ot(O,B,W));let An=!1,gt=!1,jn=!1;const ft=Ut.getUniforms(),Fn=ue.uniforms;if(ce.useProgram(Ut.program)&&(An=!0,gt=!0,jn=!0),O.id!==v&&(v=O.id,gt=!0),An||S!==T){if(ft.setValue(z,"projectionMatrix",T.projectionMatrix),be.logarithmicDepthBuffer&&ft.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,gt=!0,jn=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const kt=ft.map.cameraPosition;kt!==void 0&&kt.setValue(z,J.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ft.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||W.isSkinnedMesh)&&ft.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){ft.setOptional(z,W,"bindMatrix"),ft.setOptional(z,W,"bindMatrixInverse");const kt=W.skeleton;kt&&(be.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),ft.setValue(z,"boneTexture",kt.boneTexture,Ee),ft.setValue(z,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sr=X.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0&&be.isWebGL2===!0)&&ne.update(W,X,O,Ut),(gt||ue.receiveShadow!==W.receiveShadow)&&(ue.receiveShadow=W.receiveShadow,ft.setValue(z,"receiveShadow",W.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Fn.envMap.value=Re,Fn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),gt&&(ft.setValue(z,"toneMappingExposure",f.toneMappingExposure),ue.needsLights&&ui(Fn,jn),Me&&O.fog===!0&&Ft.refreshFogUniforms(Fn,Me),Ft.refreshMaterialUniforms(Fn,O,I,R,Z),Ma.upload(z,ue.uniformsList,Fn,Ee)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ma.upload(z,ue.uniformsList,Fn,Ee),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ft.setValue(z,"center",W.center),ft.setValue(z,"modelViewMatrix",W.modelViewMatrix),ft.setValue(z,"normalMatrix",W.normalMatrix),ft.setValue(z,"modelMatrix",W.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const kt=O.uniformsGroups;for(let On=0,Un=kt.length;On<Un;On++)if(be.isWebGL2){const es=kt[On];ye.update(es,Ut),ye.bind(es,Ut)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ut}function ui(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,B,X){Le.get(T.texture).__webglTexture=B,Le.get(T.depthTexture).__webglTexture=X;const O=Le.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=X===void 0,O.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const X=Le.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){x=T,_=B,b=X;let O=!0,W=null,Me=!1,Ce=!1;if(T){const Re=Le.get(T);Re.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),O=!1):Re.__webglFramebuffer===void 0?Ee.setupRenderTarget(T):Re.__hasExternalTextures&&Ee.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);const Ie=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=Ie[B],Me=!0):be.isWebGL2&&T.samples>0&&Ee.useMultisampledRTT(T)===!1?W=Le.get(T).__webglMultisampledFramebuffer:W=Ie,E.copy(T.viewport),A.copy(T.scissor),y=T.scissorTest}else E.copy(L).multiplyScalar(I).floor(),A.copy(F).multiplyScalar(I).floor(),y=G;if(ce.bindFramebuffer(36160,W)&&be.drawBuffers&&O&&ce.drawBuffers(T,W),ce.viewport(E),ce.scissor(A),ce.setScissorTest(y),Me){const Re=Le.get(T.texture);z.framebufferTexture2D(36160,36064,34069+B,Re.__webglTexture,X)}else if(Ce){const Re=Le.get(T.texture),De=B||0;z.framebufferTextureLayer(36160,36064,Re.__webglTexture,X||0,De)}v=-1},this.readRenderTargetPixels=function(T,B,X,O,W,Me,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){ce.bindFramebuffer(36160,Pe);try{const Re=T.texture,De=Re.format,Ie=Re.type;if(De!==bn&&oe.convert(De)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ie===Ms&&(ve.has("EXT_color_buffer_half_float")||be.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ie!==Ki&&oe.convert(Ie)!==z.getParameter(35738)&&!(Ie===yi&&(be.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-O&&X>=0&&X<=T.height-W&&z.readPixels(B,X,O,W,oe.convert(De),oe.convert(Ie),Me)}finally{const Re=x!==null?Le.get(x).__webglFramebuffer:null;ce.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,B,X=0){const O=Math.pow(2,-X),W=Math.floor(B.image.width*O),Me=Math.floor(B.image.height*O);Ee.setTexture2D(B,0),z.copyTexSubImage2D(3553,X,0,0,T.x,T.y,W,Me),ce.unbindTexture()},this.copyTextureToTexture=function(T,B,X,O=0){const W=B.image.width,Me=B.image.height,Ce=oe.convert(X.format),Pe=oe.convert(X.type);Ee.setTexture2D(X,0),z.pixelStorei(37440,X.flipY),z.pixelStorei(37441,X.premultiplyAlpha),z.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?z.texSubImage2D(3553,O,T.x,T.y,W,Me,Ce,Pe,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(3553,O,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ce,B.mipmaps[0].data):z.texSubImage2D(3553,O,T.x,T.y,Ce,Pe,B.image),O===0&&X.generateMipmaps&&z.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,O,W=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Re=oe.convert(O.format),De=oe.convert(O.type);let Ie;if(O.isData3DTexture)Ee.setTexture3D(O,0),Ie=32879;else if(O.isDataArrayTexture)Ee.setTexture2DArray(O,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,O.flipY),z.pixelStorei(37441,O.premultiplyAlpha),z.pixelStorei(3317,O.unpackAlignment);const ke=z.getParameter(3314),ot=z.getParameter(32878),Lt=z.getParameter(3316),mn=z.getParameter(3315),Kt=z.getParameter(32877),ze=X.isCompressedTexture?X.mipmaps[0]:X.image;z.pixelStorei(3314,ze.width),z.pixelStorei(32878,ze.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(Ie,W,B.x,B.y,B.z,Me,Ce,Pe,Re,De,ze.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ie,W,B.x,B.y,B.z,Me,Ce,Pe,Re,ze.data)):z.texSubImage3D(Ie,W,B.x,B.y,B.z,Me,Ce,Pe,Re,De,ze),z.pixelStorei(3314,ke),z.pixelStorei(32878,ot),z.pixelStorei(3316,Lt),z.pixelStorei(3315,mn),z.pixelStorei(32877,Kt),W===0&&O.generateMipmaps&&z.generateMipmap(Ie),ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ee.setTextureCube(T,0):T.isData3DTexture?Ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ee.setTexture2DArray(T,0):Ee.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,ce.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Fx extends Xa{}Fx.prototype.isWebGL1Renderer=!0;class Hl extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ox{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new N;class Wl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qu=new N,ju=new rt,Yu=new rt,Ux=new N,Ku=new Ve;class kx extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;ju.fromBufferAttribute(i.attributes.skinIndex,e),Yu.fromBufferAttribute(i.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Yu.getComponent(r);if(s!==0){const a=ju.getComponent(r);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ux.copy(qu).applyMatrix4(Ku),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cd extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bx extends It{constructor(e=null,t=1,n=1,i,r,s,a,l,c=Ct,u=Ct,h,d){super(null,s,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new Ve,zx=new Ve;class Xl{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:zx;Zu.multiplyMatrices(a,t[r]),Zu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=jh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Bx(t,e,e,bn,yi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new cd),this.bones.push(s),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ju extends Yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $u=new Ve,Qu=new Ve,pa=[],Vx=new Ve,ls=new cn;class Gx extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ju(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Vx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,$u),Qu.multiplyMatrices(n,$u),ls.matrixWorld=Qu,ls.raycast(e,pa);for(let s=0,a=pa.length;s<a;s++){const l=pa[s];l.instanceId=r,l.object=this,t.push(l)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ju(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ud extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eh=new N,th=new N,nh=new Ve,zo=new Va,ma=new Zr;class ql extends ht{constructor(e=new Xn,t=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)eh.fromBufferAttribute(t,i-1),th.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=eh.distanceTo(th);e.setAttribute("lineDistance",new ai(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;nh.copy(i).invert(),zo.copy(e.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,h=new N,d=new N,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,s.start),b=Math.min(g.count,s.start+s.count);for(let x=_,v=b-1;x<v;x+=p){const S=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,E),zo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,s.start),b=Math.min(m.count,s.start+s.count);for(let x=_,v=b-1;x<v;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),zo.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ih=new N,rh=new N;class Hx extends ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ih.fromBufferAttribute(t,i),rh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ih.distanceTo(rh);e.setAttribute("lineDistance",new ai(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wx extends ql{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hd extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sh=new Ve,fl=new Va,ga=new Zr,_a=new N;class Xx extends ht{constructor(e=new Xn,t=new hd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;sh.copy(i).invert(),fl.copy(e.ray).applyMatrix4(sh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=d,f=p;g<f;g++){const m=c.getX(g);_a.fromBufferAttribute(h,m),ah(_a,m,l,i,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,f=p;g<f;g++)_a.fromBufferAttribute(h,g),ah(_a,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ah(o,e,t,n,i,r,s){const a=fl.distanceSqToPoint(o);if(a<t){const l=new N;fl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class qx extends In{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class jl extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nr extends jl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function gi(o,e,t){return dd(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function xa(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function dd(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function jx(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function oh(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i}function fd(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)}class Us{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yx extends Us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wr,endingEnd:wr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Tr:r=e,a=2*t-n;break;case Aa:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tr:s=e,l=2*n-t;break;case Aa:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),f=g*g,m=f*g,_=-d*m+2*d*f-d*g,b=(1+d)*m+(-1.5-2*d)*f+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*f+.5*g,v=p*m-p*f;for(let S=0;S!==a;++S)r[S]=_*s[u+S]+b*s[c+S]+x*s[l+S]+v*s[h+S];return r}}class pd extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=s[c+d]*h+s[l+d]*u;return r}}class Kx extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=gi(n,r,s),this.values=gi(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&dd(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=gi(this.times),t=gi(this.values),n=this.getValueSize(),i=this.getInterpolation()===po,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const f=t[h+g];if(f!==t[d+g]||f!==t[p+g]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const h=a*n,d=s*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=gi(e,0,s),this.values=gi(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=gi(this.times,0),t=gi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Br;class $r extends qn{}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Ss;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class md extends qn{}md.prototype.ValueTypeName="color";class As extends qn{}As.prototype.ValueTypeName="number";class Zx extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Pn.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Qi extends qn{InterpolantFactoryMethodLinear(e){return new Zx(this.times,this.values,this.getValueSize(),e)}}Qi.prototype.ValueTypeName="quaternion";Qi.prototype.DefaultInterpolation=Br;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends qn{}Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Ss;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends qn{}Cs.prototype.ValueTypeName="vector";class pl{constructor(e,t=-1,n,i=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push($x(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=jx(l);l=oh(l,1,u),c=oh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new As(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,f){if(p.length!==0){const m=[],_=[];fd(p,m,_,g),m.length!==0&&f.push(new h(d,m,_))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let f=0;f<d[g].morphTargets.length;f++)p[d[g].morphTargets[f]]=-1;for(const f in p){const m=[],_=[];for(let b=0;b!==d[g].morphTargets.length;++b){const x=d[g];m.push(x.time),_.push(x.morphTarget===f?1:0)}i.push(new As(".morphTargetInfluence["+f+"]",m,_))}l=p.length*s}else{const p=".bones["+t[h].name+"]";n(Cs,p+".position",d,"pos",i),n(Qi,p+".quaternion",d,"rot",i),n(Cs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jx(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return md;case"quaternion":return Qi;case"bool":case"boolean":return $r;case"string":return Qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function $x(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jx(o.type);if(o.times===void 0){const t=[],n=[];fd(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Vr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Qx{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ev=new Qx;class ks{constructor(e){this.manager=e!==void 0?e:ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Qn={};class tv extends Error{constructor(e,t){super(e),this.response=t}}class gd extends ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Qn[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let f=0;const m=new ReadableStream({start(_){b();function b(){h.read().then(({done:x,value:v})=>{if(x)_.close();else{f+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:p});for(let E=0,A=u.length;E<A;E++){const y=u[E];y.onProgress&&y.onProgress(S)}_.enqueue(v),b()}})}}});return new Response(m)}else throw new tv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Vr.add(e,c);const u=Qn[e];delete Qn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Qn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nv extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=Es("img");function l(){u(),Vr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class iv extends ks{constructor(e){super(e)}load(e,t,n,i){const r=new It,s=new nv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class qa extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Vo=new Ve,lh=new N,ch=new N;class Yl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rv extends Yl{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sv extends qa{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new rv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uh=new Ve,cs=new N,Go=new N;class av extends Yl{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(cs),Go.copy(n.position),Go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Go),n.updateMatrixWorld(),i.makeTranslation(-cs.x,-cs.y,-cs.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class ov extends qa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new av}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lv extends Yl{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ja extends qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new lv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kl extends qa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ml{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cv extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Vr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Vr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hh(){return(typeof performance>"u"?Date:performance).now()}class uv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){Pn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;Pn.multiplyQuaternionsFlat(e,s,e,t,e,n),Pn.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*s+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[n+s]*i}}}const Zl="\\[\\]\\.:\\/",hv=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",dv="[^"+Zl.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Jl),pv=/(WCOD+)?/.source.replace("WCOD",dv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),_v=new RegExp("^"+fv+pv+mv+gv+"$"),xv=["material","materials","bones","map"];class vv{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(e){const t=_v.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=vv;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,a=new Array(s),l={endingStart:wr,endingEnd:wr};for(let c=0;c!==s;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,a=i/r;e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case _p:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulateAdditive(a);break;case Ul:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===gp;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===Ol){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Tr,i.endingEnd=Tr):(e?i.endingStart=this.zeroSlopeAtStart?Tr:wr:i.endingStart=Aa,t?i.endingEnd=this.zeroSlopeAtEnd?Tr:wr:i.endingEnd=Aa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,l=s.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const bv=new Float32Array(1);class $l extends tr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],p=d.name;let g=u[p];if(g!==void 0)++g.referenceCount,s[h]=g;else{if(g=s[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const f=t&&t._propertyBindings[h].binding.parsedPath;g=new uv(Je.create(n,p,f),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),s[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new pd(new Float32Array(2),new Float32Array(2),1,bv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?pl.findByName(i,e):e;const a=s!==null?s.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=Ul),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new yv(this,s,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?pl.findByName(n,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let a=0,l=s.length;a!==l;++a){const c=s[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const a=n[s].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const a=r[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class xd{constructor(e,t,n=0,i=1/0){this.ray=new Va(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(dh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)gl(e[i],this,n,t);return n.sort(dh),n}}function dh(o,e){return o.distance-e.distance}function gl(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)gl(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);const Mv={position:"Software Engineer",company:"Globus Marine International",type:"Intership",from:new Date("2021-04-01"),until:new Date("2021-06-25"),city:"Ljubljana",country:"Slovenia",skills:["C#",".NET","SQL Server"]},Sv={position:"Data Scientist",company:"DikinBaws",type:"Full Time",from:new Date("2022-02-01"),until:"Present",city:"Krakow",country:"Poland",skills:["Python","PyTorch","ScikitLearn"]},fh=[Mv,Sv];function ph(o,e){if(e===xp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===ll||e===Xh){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===ll)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Ql extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new kv(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ml.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vd){try{s[je.KHR_BINARY_GLTF]=new Bv(e)}catch(h){i&&i(h);return}r=JSON.parse(s[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $v(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:s[h]=new Ev;break;case je.KHR_DRACO_MESH_COMPRESSION:s[h]=new zv(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:s[h]=new Vv;break;case je.KHR_MESH_QUANTIZATION:s[h]=new Gv;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function wv(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tv{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ja(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ov(u),c.distance=h;break;case"spot":c=new sv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ev{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return zi}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}}class Av{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Cv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class Rv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class Lv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,qe)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Dv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Pv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(a[0],a[1],a[2]),Promise.all(r)}}class Iv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Nv{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new Oe(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,qe)),Promise.all(r)}}class Fv{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class Ov{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Uv{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class kv{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const f=new Ve,m=new N,_=new Pn,b=new N(1,1,1),x=new Gx(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&b.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,f.compose(m,_,b));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ht.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const vd="glTF",us=12,mh={JSON:1313821514,BIN:5130562};class Bv{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-us,r=new DataView(e,us);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===mh.JSON){const c=new Uint8Array(e,us+s,a);this.content=n.decode(c)}else if(l===mh.BIN){const c=us+s;this.body=e.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const u in s){const h=_l[u]||u.toLowerCase();a[h]=s[u]}for(const u in e.attributes){const h=_l[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Dr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],f=l[p];f!==void 0&&(g.normalized=f)}h(d)},a,c)})})}}class Vv{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gv{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class yd extends Us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,f=g-c,m=-2*p+3*d,_=p-d,b=1-m,x=_-d+h;for(let v=0;v!==a;v++){const S=s[f+v+a],E=s[f+v+l]*u,A=s[g+v+a],y=s[g+v]*u;r[v]=b*S+x*E+m*A+_*y}return r}}const Hv=new Pn;class Wv extends yd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Hv.fromArray(r).normalize().toArray(r),r}}const xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gh={9728:Ct,9729:Zt,9984:ol,9985:Hh,9986:ya,9987:Yi},_h={33071:yn,33648:Ea,10497:Ur},Ho={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xv={CUBICSPLINE:void 0,LINEAR:Br,STEP:Ss},Wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qv(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new jl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),o.DefaultMaterial}function hs(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jv(o,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;s.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Yv(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Kv(o){const e=o.extensions&&o.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+xh(e.attributes):t=o.indices+":"+xh(o.attributes)+":"+o.mode,t}function xh(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function xl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zv(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Jv=new Ve;class $v{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wv,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new iv(this.options.manager):this.textureLoader=new cv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};hs(r,a,i),xi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,u]of s.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ml.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Ho[i.type],a=Dr[i.componentType],l=i.normalized===!0,c=new a(i.count*s);return Promise.resolve(new Yt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=Ho[i.type],c=Dr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let f,m;if(p&&p!==h){const _=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(b);x||(f=new c(a,_*p,i.count*p/u),x=new Ox(f,p/u),t.cache.add(b,x)),m=new Wl(x,l,d%p/u,g)}else a===null?f=new c(i.count*l):f=new c(a,d,i.count*l),m=new Yt(f,l,g);if(i.sparse!==void 0){const _=Ho.SCALAR,b=Dr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new b(s[1],x,i.sparse.count*_),E=new c(s[2],v,i.sparse.count*l);a!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,y=S.length;A<y;A++){const M=S[A];if(m.setX(M,E[A*l]),l>=2&&m.setY(M,E[A*l+1]),l>=3&&m.setZ(M,E[A*l+2]),l>=4&&m.setW(M,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"";const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=gh[d.magFilter]||Zt,u.minFilter=gh[d.minFilter]||Yi,u.wrapS=_h[d.wrapS]||Ur,u.wrapT=_h[d.wrapT]||Ur,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(f){const m=new It(f);m.needsUpdate=!0,d(m)}),t.load(ml.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=s.mimeType||Zv(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hd,In.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ud,In.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return jl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,qe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ii);const u=r.alphaMode||Wo.OPAQUE;if(u===Wo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Wo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==zi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==zi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==zi&&(a.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==zi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qe)),Promise.all(c).then(function(){const h=new s(a);return r.name&&(h.name=r.name),xi(h,r),t.associations.set(h,{materials:e}),r.extensions&&hs(i,h,r),h})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vh(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Kv(c),h=i[u];if(h)s.push(h.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vh(new Xn,c,t),i[u]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?qv(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const f=u[p],m=s[p];let _;const b=c[p];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new kx(f,b):new cn(f,b),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?_.geometry=ph(_.geometry,Xh):m.mode===xn.TRIANGLE_FAN&&(_.geometry=ph(_.geometry,ll));else if(m.mode===xn.LINES)_=new Hx(f,b);else if(m.mode===xn.LINE_STRIP)_=new ql(f,b);else if(m.mode===xn.LINE_LOOP)_=new Wx(f,b);else if(m.mode===xn.POINTS)_=new Xx(f,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Yv(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),xi(_,r),m.extensions&&hs(i,_,m),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new Vi;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Op.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){a.push(h);const d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xl(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],p=h.target,g=p.node,f=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",f)),s.push(this.getDependency("accessor",m)),a.push(d),l.push(p)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],f=[];for(let _=0,b=u.length;_<b;_++){const x=u[_],v=h[_],S=d[_],E=p[_],A=g[_];if(x===void 0)continue;x.updateMatrix();let y;switch(_i[A.path]){case _i.weights:y=As;break;case _i.rotation:y=Qi;break;case _i.position:case _i.scale:default:y=Cs;break}const M=x.name?x.name:x.uuid,R=E.interpolation!==void 0?Xv[E.interpolation]:Br,I=[];_i[A.path]===_i.weights?x.traverse(function(D){D.morphTargetInfluences&&I.push(D.name?D.name:D.uuid)}):I.push(M);let U=S.array;if(S.normalized){const D=xl(U.constructor),L=new Float32Array(U.length);for(let F=0,G=U.length;F<G;F++)L[F]=U[F]*D;U=L}for(let D=0,L=I.length;D<L;D++){const F=new y(I[D]+"."+_i[A.path],v.array,U,R);E.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(K){const V=this instanceof Qi?Wv:yd;return new V(this.times,this.values,this.getValueSize()/3,K)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f.push(F)}}const m=n.name?n.name:"animation_"+e;return new pl(m,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(d){return i._getNodeRef(i.cameraCache,r.camera,d)})),i._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){a.push(d)});const c=[],u=r.children||[];for(let d=0,p=u.length;d<p;d++)c.push(i.getDependency("node",u[d]));const h=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(c),h])}().then(function(a){const l=a[0],c=a[1],u=a[2];let h;if(r.isBone===!0?h=new cd:l.length>1?h=new Vi:l.length===1?h=l[0]:h=new ht,h!==l[0])for(let d=0,p=l.length;d<p;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=s),xi(h,r),r.extensions&&hs(n,h,r),r.matrix!==void 0){const d=new Ve;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Jv)});for(let d=0,p=c.length;d<p;d++)h.add(c[d]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vi;n.name&&(r.name=i.createUniqueName(n.name)),xi(r,n),n.extensions&&hs(t,r,n);const s=n.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof In||d instanceof It)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}}function Qv(o,e,t){const n=e.attributes,i=new Kr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=xl(Dr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const f=xl(Dr[d.componentType]);l.multiplyScalar(f)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new Zr;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function vh(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=_l[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return xi(o,e),Qv(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jv(o,e.targets,t):o})}function ei(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function bd(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gr={duration:.5,overwrite:!1,delay:0},ec,Vt,bt,Mn=1e8,it=1/Mn,vl=Math.PI*2,ey=vl/4,ty=0,Md=Math.sqrt,ny=Math.cos,iy=Math.sin,Rt=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},li=function(e){return typeof e=="number"},tc=function(e){return typeof e>"u"},Wn=function(e){return typeof e=="object"},$t=function(e){return e!==!1},nc=function(){return typeof window<"u"},va=function(e){return pt(e)||Rt(e)},Sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,yl=/(?:-?\.?\d|\.)+/gi,wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Td=/[+-]=-?[.\d]+/,Ed=/[^,'"\[\]\s]+/gi,ry=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,vn,bl,ic,dn={},Ra={},Ad,Cd=function(e){return(Ra=er(e,dn))&&tn},rc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},La=function(e,t){return!t&&console.warn(e)},Rd=function(e,t){return e&&(dn[e]=t)&&Ra&&(Ra[e]=t)||dn},Rs=function(){return 0},sy={suppressEvents:!0,isStart:!0,kill:!1},Sa={suppressEvents:!0,kill:!1},ay={suppressEvents:!0},sc={},Ti=[],Ml={},Ld,an={},qo={},yh=30,wa=[],ac="",oc=function(e){var t=e[0],n,i;if(Wn(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wa.length;i--&&!wa[i].targetTest(t););n=wa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ef(e[i],n)))||e.splice(i,1);return e},Xi=function(e){return e._gsap||oc(Sn(e))[0]._gsap},Dd=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():tc(n)&&e.getAttribute&&e.getAttribute(t)||n},Qt=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},Pr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},oy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Da=function(){var e=Ti.length,t=Ti.slice(0),n,i;for(Ml={},Ti.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pd=function(e,t,n,i){Ti.length&&!Vt&&Da(),e.render(t,n,i||Vt&&t<0&&(e._initted||e._startAt)),Ti.length&&!Vt&&Da()},Id=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ed).length<2?t:Rt(e)?e.trim():e},Nd=function(e){return e},Tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ly=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},er=function(e,t){for(var n in t)e[n]=t[n];return e},bh=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Pa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vs=function(e){var t=e.parent||ct,n=e.keyframes?ly(Gt(e.keyframes)):Tn;if($t(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Fd=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Ya=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},qi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},uy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sl=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(Sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},hy=function o(e){return!e||e._ts&&o(e.parent)},Mh=function(e){return e._repeat?Hr(e._tTime,e=e.duration()+e._rDelay)*e:0},Hr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ia=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ka=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},Za=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ka(e),n._dirty||qi(n,e)),e},Od=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ia(e.rawTime(),t),(!t._dur||Bs(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),qi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},zn=function(e,t,n,i){return t.parent&&Ai(t),t._start=Pt((li(n)?n:n||e!==ct?_n(e,n,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Fd(e,t,"_first","_last",e._sort?"_start":0),wl(t)||(e._recent=t),i||Od(e,t),e._ts<0&&Za(e,e._tTime),e},Ud=function(e,t){return(dn.ScrollTrigger||rc("scrollTrigger",t))&&dn.ScrollTrigger.create(t,e)},kd=function(e,t,n,i,r){if(cc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ld!==on.frame)return Ti.push(e),e._lazy=[r,i],1},dy=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},wl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fy=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&dy(e)&&!(!e._initted&&wl(e))||(e._ts<0||e._dp._ts<0)&&!wl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Bs(0,e._tDur,t),u=Hr(l,a),e._yoyo&&u&1&&(s=1-s),u!==Hr(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Vt||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&kd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Sl(e,t,n,!0),e._onUpdate&&!n&&wn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Ai(e,1),!n&&!Vt&&(wn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},py=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wr=function(e,t,n,i){var r=e._repeat,s=Pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:Pt(s*(r+1)+e._rDelay*r):s,a>0&&!i&&Za(e,e._tTime=e._tDur*a),e.parent&&Ka(e),n||qi(e.parent,e),e},Sh=function(e){return e instanceof Jt?qi(e):Wr(e,e._dur)},my={_start:0,endTime:Rs,totalDuration:Rs},_n=function o(e,t,n){var i=e.labels,r=e._recent||my,s=e.duration()>=Mn?r.endTime(!1):e._dur,a,l,c;return Rt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Gt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ys=function(e,t,n){var i=li(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$t(l.vars.inherit)&&l.parent;s.immediateRender=$t(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new wt(t[0],s,t[r+1])},Ri=function(e,t){return e||e===0?t(e):t},Bs=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!Rt(e)||!(t=ry.exec(e))?"":t[1]},gy=function(e,t,n){return Ri(n,function(i){return Bs(e,t,i)})},Tl=[].slice,Bd=function(e,t){return e&&Wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wn(e[0]))&&!e.nodeType&&e!==vn},_y=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Rt(i)&&!t||Bd(i,1)?(r=n).push.apply(r,Sn(i)):n.push(i)})||n},Sn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):Rt(e)&&!n&&(bl||!Xr())?Tl.call((t||ic).querySelectorAll(e),0):Gt(e)?_y(e,n):Bd(e)?Tl.call(e,0):e?[e]:[]},El=function(e){return e=Sn(e)[0]||La("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Sn(t,n.querySelectorAll?n:n===e?La("Invalid scope")||ic.createElement("div"):e)}},zd=function(e){return e.sort(function(){return .5-Math.random()})},Vd=function(e){if(pt(e))return e;var t=Wn(e)?e:{each:e},n=ji(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Rt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,p,g){var f=(g||t).length,m=s[f],_,b,x,v,S,E,A,y,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Mn])[1],!M){for(A=-Mn;A<(A=g[M++].getBoundingClientRect().left)&&M<f;);M--}for(m=s[f]=[],_=l?Math.min(M,f)*u-.5:i%M,b=M===Mn?0:l?f*h/M-.5:i/M|0,A=0,y=Mn,E=0;E<f;E++)x=E%M-_,v=b-(E/M|0),m[E]=S=c?Math.abs(c==="y"?v:x):Md(x*x+v*v),S>A&&(A=S),S<y&&(y=S);i==="random"&&zd(m),m.max=A-y,m.min=y,m.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(M>f?f-1:c?c==="y"?f/M:M:Math.max(M,f/M))||0)*(i==="edges"?-1:1),m.b=f<0?r-f:r,m.u=zt(t.amount||t.each)||0,n=n&&f<0?Jd(n):n}return f=(m[d]-m.min)/m.max||0,Pt(m.b+(n?n(f):f)*m.v)+m.u}},Al=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Pt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(li(n)?0:zt(n))}},Gd=function(e,t){var n=Gt(e),i,r;return!n&&Wn(e)&&(i=n=e.radius||Mn,e.values?(e=Sn(e.values),(r=!li(e[0]))&&(i*=i)):e=Al(e.increment)),Ri(t,n?pt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Mn,u=0,h=e.length,d,p;h--;)r?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:s,r||u===s||li(s)?u:u+zt(s)}:Al(e))},Hd=function(e,t,n,i){return Ri(Gt(e)?!t:n===!0?!!(n=0):!i,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},vy=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},yy=function(e,t,n){return Xd(e,t,0,1,n)},Wd=function(e,t,n){return Ri(n,function(i){return e[~~t(i)]})},by=function o(e,t,n){var i=t-e;return Gt(e)?Wd(e,o(0,e.length),t):Ri(n,function(r){return(i+(r-e)%i)%i+e})},My=function o(e,t,n){var i=t-e,r=i*2;return Gt(e)?Wd(e,o(0,e.length-1),t):Ri(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Ls=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?Ed:yl),n+=e.substr(t,i-t)+Hd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Xd=function(e,t,n,i,r){var s=t-e,a=i-n;return Ri(r,function(l){return n+((l-e)/s*a||0)})},Sy=function o(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var s=Rt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Gt(e)&&!Gt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=t}else i||(e=er(Gt(e)?[]:{},e));if(!u){for(l in t)lc.call(a,e,l,"get",t[l]);r=function(g){return dc(g,a)||(s?e.p:e)}}}return Ri(n,r)},wh=function(e,t,n){var i=e.labels,r=Mn,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},wn=function(e,t,n){var i=e.vars,r=i[t],s=bt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ti.length&&Da(),a&&(bt=a),u=l?r.apply(c,l):r.call(c),bt=s,u},ms=function(e){return Ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&wn(e,"onInterrupt"),e},Cr,qd=[],jd=function(e){if(!nc()){qd.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Rs,render:dc,add:lc,kill:By,modifier:ky,rawVars:0},s={targetTest:0,get:0,getSetter:hc,aliases:{},register:0};if(Xr(),e!==i){if(an[t])return;Tn(i,Tn(Pa(e,r),s)),er(i.prototype,er(r,Pa(e,s))),an[i.prop=t]=i,e.targetTest&&(wa.push(i),sc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rd(t,i),e.register&&e.register(tn,i,en)},tt=255,gs={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},jo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},Yd=function(e,t,n){var i=e?li(e)?[e>>16,e>>8&tt,e&tt]:0:gs.black,r,s,a,l,c,u,h,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),gs[e])i=gs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tt,i&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(yl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=jo(l+1/3,r,s),i[1]=jo(l,r,s),i[2]=jo(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(wd),n&&i.length<4&&(i[3]=1),i}else i=e.match(yl)||gs.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/tt,s=i[1]/tt,a=i[2]/tt,h=Math.max(r,s,a),d=Math.min(r,s,a),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===r?(s-a)/p+(s<a?6:0):h===s?(a-r)/p+2:(r-s)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kd=function(e){var t=[],n=[],i=-1;return e.split(Ei).forEach(function(r){var s=r.match(Ar)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Th=function(e,t,n){var i="",r=(e+i).match(Ei),s=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Yd(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Kd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ei,"1").split(Ar),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ei),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Ei=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in gs)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),wy=/hsl[a]?\(/,Zd=function(e){var t=e.join(" "),n;if(Ei.lastIndex=0,Ei.test(t))return n=wy.test(t),e[1]=Th(e[1],n),e[0]=Th(e[0],n,Kd(e[1])),!0},Ds,on=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,h,d,p,g=function f(m){var _=o()-i,b=m===!0,x,v,S,E;if(_>e&&(n+=_-t),i+=_,S=i-n,x=S-s,(x>0||b)&&(E=++h.frame,d=S-h.time*1e3,h.time=S=S/1e3,s+=x+(x>=r?4:r-x),v=1),b||(l=c(f)),v)for(p=0;p<a.length;p++)a[p](S,d,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ad&&(!bl&&nc()&&(vn=bl=window,ic=vn.document||{},dn.gsap=tn,(vn.gsapVersions||(vn.gsapVersions=[])).push(tn.version),Cd(Ra||vn.GreenSockGlobals||!vn.gsap&&vn||{}),u=vn.requestAnimationFrame,qd.forEach(jd)),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Ds=1,g(2))},sleep:function(){(u?vn.cancelAnimationFrame:clearTimeout)(l),Ds=0,c=Rs},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,_,b){var x=_?function(v,S,E,A){m(v,S,E,A),h.remove(x)}:m;return h.remove(m),a[b?"unshift":"push"](x),Xr(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),Xr=function(){return!Ds&&on.wake()},Ge={},Ty=/^[\d.\-M][\d.\-,\s]/,Ey=/["']/g,Ay=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Ey,"").trim():+c,i=l.substr(a+1).trim();return t},Cy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ry=function(e){var t=(e+"").split("("),n=Ge[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ay(t[1])]:Cy(e).split(",").map(Id)):Ge._CE&&Ty.test(e)?Ge._CE("",e):n},Jd=function(e){return function(t){return 1-e(1-t)}},$d=function o(e,t){for(var n=e._first,i;n;)n instanceof Jt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ji=function(e,t){return e&&(pt(e)?e:Ge[e]||Ry(e))||t},ir=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Qt(e,function(a){Ge[a]=dn[a]=r,Ge[s=a.toLowerCase()]=n;for(var l in r)Ge[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ge[a+"."+l]=r[l]}),r},Qd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yo=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/vl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*iy((u-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Qd(a);return r=vl/r,l.config=function(c,u){return o(e,c,u)},l},Ko=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Qd(n);return i.config=function(r){return o(e,r)},i};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;ir(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ge.Linear.easeNone=Ge.none=Ge.Linear.easeIn;ir("Elastic",Yo("in"),Yo("out"),Yo());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};ir("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);ir("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});ir("Circ",function(o){return-(Md(1-o*o)-1)});ir("Sine",function(o){return o===1?1:-ny(o*ey)+1});ir("Back",Ko("in"),Ko("out"),Ko());Ge.SteppedEase=Ge.steps=dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-it;return function(a){return((i*Bs(0,s,a)|0)+r)*n}}};Gr.ease=Ge["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return ac+=o+","+o+"Params,"});var ef=function(e,t){this.id=ty++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Dd,this.set=t?t.getSetter:hc},qr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wr(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),Ds||on.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Za(this,n),!r._dp||r.parent||Od(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Hr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ia(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(Bs(-Math.abs(this._delay),this._tDur,i),!0),Ka(this),uy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+($t(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ia(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ay);var i=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(_n(this,n),$t(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$t(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-it)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=pt(n)?n:Nd,a=function(){var c=i.then;i.then=null,pt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ms(this)},o}();Tn(qr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Jt=function(o){bd(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$t(n.sortChildren),ct&&zn(n.parent||ct,ei(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ud(ei(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return ys(0,arguments,this),this},t.from=function(i,r,s){return ys(1,arguments,this),this},t.fromTo=function(i,r,s,a){return ys(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,vs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new wt(i,r,_n(this,s),1),this},t.call=function(i,r,s){return zn(this,wt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new wt(i,s,_n(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,vs(s).immediateRender=$t(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},t.staggerFromTo=function(i,r,s,a,l,c,u,h){return a.startAt=s,vs(a).immediateRender=$t(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,f,m,_,b,x,v,S,E,A;if(this!==ct&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(d=Pt(u%m),u===l?(f=this._repeat,d=c):(f=~~(u/m),f&&f===u/m&&(d=c,f--),d>c&&(d=c)),S=Hr(this._tTime,m),!a&&this._tTime&&S!==f&&this._tTime-S*m-this._dur<=0&&(S=f),E&&f&1&&(d=c-d,A=1),f!==S&&!this._lock){var y=E&&S&1,M=y===(E&&f&1);if(f<S&&(y=!y),a=y?0:c,this._lock=1,this.render(a||(A?0:Pt(f*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;$d(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=py(this,Pt(a),Pt(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!f&&(wn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,s),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-it);break}}p=g}else{p=this._last;for(var R=i<0?i:d;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(i,r,s);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,r,s||Vt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=R?-it:it);break}}p=g}}if(b&&!r&&(this.pause(),b.render(d>=a?0:-it)._zTime=d>=a?1:-1,this._ts))return this._start=v,Ka(this),this.render(i,r,s);this._onUpdate&&!r&&wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ai(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(wn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(li(r)||(r=_n(this,r,i)),!(i instanceof qr)){if(Gt(i))return i.forEach(function(a){return s.add(a,r)}),this;if(Rt(i))return this.addLabel(i,r);if(pt(i))i=wt.delayedCall(0,i);else return this}return this!==i?zn(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-Mn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof wt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Rt(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(Ya(this,i),i===this._recent&&(this._recent=this._last),qi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(on.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=_n(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=wt.delayedCall(0,r||Rs,s);return a.data="isPause",this._hasPause=1,zn(this,a,_n(this,i))},t.removePause=function(i){var r=this._first;for(i=_n(this,i);r;)r._start===i&&r.data==="isPause"&&Ai(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)bi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=Sn(i),l=this._first,c=li(r),u;l;)l instanceof wt?oy(l._targets,a)&&(c?(!bi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=_n(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=wt.to(s,Tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||it,onStart:function(){if(s.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&Wr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Tn({startAt:{time:_n(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wh(this,_n(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wh(this,_n(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return qi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qi(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=Mn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,zn(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Wr(s,s===ct&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(ct._ts&&(Pd(ct,Ia(i,ct)),Ld=on.frame),on.frame>=yh){yh+=hn.autoSleep||120;var r=ct._first;if((!r||!r._ts)&&hn.autoSleep&&on._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||on.sleep()}}},e}(qr);Tn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ly=function(e,t,n,i,r,s,a){var l=new en(this._pt,e,t,0,1,of,null,r),c=0,u=0,h,d,p,g,f,m,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ls(i)),s&&(b=[n,i],s(b,e,t),n=b[0],i=b[1]),d=n.match(Xo)||[];h=Xo.exec(i);)g=h[0],f=i.substring(c,h.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:m,c:g.charAt(1)==="="?Pr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Xo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Td.test(i)||_)&&(l.e=0),this._pt=l,l},lc=function(e,t,n,i,r,s,a,l,c,u){pt(i)&&(i=i(r||0,e,s));var h=e[t],d=n!=="get"?n:pt(h)?c?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=pt(h)?c?Fy:sf:uc,g;if(Rt(i)&&(~i.indexOf("random(")&&(i=Ls(i)),i.charAt(1)==="="&&(g=Pr(d,i)+(zt(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Cl)return!isNaN(d*i)&&i!==""?(g=new en(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Uy:af,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&rc(t,i),Ly.call(this,e,t,d,i,p,l||hn.stringFilter,c))},Dy=function(e,t,n,i,r){if(pt(e)&&(e=bs(e,r,t,n,i)),!Wn(e)||e.style&&e.nodeType||Gt(e)||Sd(e))return Rt(e)?bs(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=bs(e[a],r,t,n,i);return s},tf=function(e,t,n,i,r,s){var a,l,c,u;if(an[e]&&(a=new an[e]).init(r,a.rawVars?t[e]:Dy(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new en(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Cr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},bi,Cl,cc=function o(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,d=i.runBackwards,p=i.yoyoEase,g=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,b=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:b,S=e._overwrite==="auto"&&!ec,E=e.timeline,A,y,M,R,I,U,D,L,F,G,K,V,$;if(E&&(!g||!r)&&(r="none"),e._ease=ji(r,Gr.ease),e._yEase=p?Jd(ji(p===!0?r:p,Gr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(L=b[0]?Xi(b[0]).harness:0,V=L&&i[L.prop],A=Pa(i,sc),_&&(_._zTime<0&&_.progress(1),t<0&&d&&a&&!f?_.render(-1,!0):_.revert(d&&m?Sa:sy),_._lazy=0),s){if(Ai(e._startAt=wt.set(b,Tn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&$t(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!a&&!f)&&e._startAt.revert(Sa),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&m&&!_){if(t&&(a=!1),M=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$t(l),immediateRender:a,stagger:0,parent:x},A),V&&(M[L.prop]=V),Ai(e._startAt=wt.set(b,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(Sa):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&$t(l)||l&&!m,y=0;y<b.length;y++){if(I=b[y],D=I._gsap||oc(b)[y]._gsap,e._ptLookup[y]=G={},Ml[D.id]&&Ti.length&&Da(),K=v===b?y:v.indexOf(I),L&&(F=new L).init(I,V||A,e,K,v)!==!1&&(e._pt=R=new en(e._pt,I,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Z){G[Z]=R}),F.priority&&(U=1)),!L||V)for(M in A)an[M]&&(F=tf(M,A,e,K,I,v))?F.priority&&(U=1):G[M]=R=lc.call(e,I,M,"get",A[M],K,v,0,i.stringFilter);e._op&&e._op[y]&&e.kill(I,e._op[y]),S&&e._pt&&(bi=e,ct.killTweensOf(I,G,e.globalTime(t)),$=!e.parent,bi=0),e._pt&&l&&(Ml[D.id]=1)}U&&lf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,g&&t<=0&&E.render(Mn,!0,!0)},Py=function(e,t,n,i,r,s,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Cl=1,e.vars[t]="+=0",cc(e,a),Cl=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=_t(n)+zt(u.e)),u.b&&(u.b=c.s+zt(u.b))},Iy=function(e,t){var n=e[0]?Xi(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=er({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},Ny=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(Gt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},bs=function(e,t,n,i,r){return pt(e)?e.call(t,n,i,r):Rt(e)&&~e.indexOf("random(")?Ls(e):e},nf=ac+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rf={};Qt(nf+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return rf[o]=1});var wt=function(o){bd(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:vs(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=i.parent||ct,x=(Gt(n)||Sd(n)?li(n[0]):"length"in i)?[n]:Sn(n),v,S,E,A,y,M,R,I;if(a._targets=x.length?oc(x):La("GSAP target "+n+" not found. https://greensock.com",!hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||va(c)||va(u)){if(i=a.vars,v=a.timeline=new Jt({data:"nested",defaults:f||{},targets:b&&b.data==="nested"?b.vars.targets:x}),v.kill(),v.parent=v._dp=ei(a),v._start=0,d||va(c)||va(u)){if(A=x.length,R=d&&Vd(d),Wn(d))for(y in d)~nf.indexOf(y)&&(I||(I={}),I[y]=d[y]);for(S=0;S<A;S++)E=Pa(i,rf),E.stagger=0,_&&(E.yoyoEase=_),I&&er(E,I),M=x[S],E.duration=+bs(c,ei(a),S,M,x),E.delay=(+bs(u,ei(a),S,M,x)||0)-a._delay,!d&&A===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(M,E,R?R(S,M,x):0),v._ease=Ge.none;v.duration()?c=u=0:a.timeline=0}else if(g){vs(Tn(v.vars.defaults,{ease:"none"})),v._ease=ji(g.ease||i.ease||"none");var U=0,D,L,F;if(Gt(g))g.forEach(function(G){return v.to(x,G,">")}),v.duration();else{E={};for(y in g)y==="ease"||y==="easeEach"||Ny(y,g[y],E,g.easeEach);for(y in E)for(D=E[y].sort(function(G,K){return G.t-K.t}),U=0,S=0;S<D.length;S++)L=D[S],F={ease:L.e,duration:(L.t-(S?D[S-1].t:0))/100*c},F[y]=L.v,v.to(x,F,U),U+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return p===!0&&!ec&&(bi=ei(a),ct.killTweensOf(x),bi=0),zn(b,ei(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Pt(b._time)&&$t(h)&&hy(ei(a))&&b.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-u)||0)),m&&Ud(ei(a),m),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-it&&!u?l:i<it?0:i,d,p,g,f,m,_,b,x,v;if(!c)fy(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,r,s);if(d=Pt(h%f),h===l?(g=this._repeat,d=c):(g=~~(h/f),g&&g===h/f&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,d=c-d),m=Hr(this._tTime,f),d===a&&!s&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&$d(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Pt(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(kd(this,u?i:d,s,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!a&&!r&&!g&&(wn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(i<0?i:!d&&_?-it:x._dur*x._ease(d/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Sl(this,i,r,s),wn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Sl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!r&&!(u&&!a)&&(h||a||_)&&(wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,a){Ds||on.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||cc(this,l),c=this._ease(l/this._dur),Py(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(Za(this,0),this.parent||Fd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ms(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,bi&&bi.vars.overwrite!==!0)._first||ms(this),this.parent&&s!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Sn(i):a,c=this._ptLookup,u=this._pt,h,d,p,g,f,m,_;if((!r||r==="all")&&cy(a,l))return r==="all"&&(this._pt=0),ms(this);for(h=this._op=this._op||[],r!=="all"&&(Rt(r)&&(f={},Qt(r,function(b){return f[b]=1}),r=f),r=Iy(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],r==="all"?(h[_]=r,g=d,p={}):(p=h[_]=h[_]||{},g=r);for(f in g)m=d&&d[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Ya(this,m,"_pt"),delete d[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&u&&ms(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ys(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return ys(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return ct.killTweensOf(i,r,s)},e}(qr);Tn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(o){wt[o]=function(){var e=new Jt,t=Tl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var uc=function(e,t,n){return e[t]=n},sf=function(e,t,n){return e[t](n)},Fy=function(e,t,n,i){return e[t](i.fp,n)},Oy=function(e,t,n){return e.setAttribute(t,n)},hc=function(e,t){return pt(e[t])?sf:tc(e[t])&&e.setAttribute?Oy:uc},af=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Uy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},of=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},dc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ky=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},By=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ya(this,t,"_pt"):t.dep||(n=1),t=i;return!n},zy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lf=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},en=function(){function o(t,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||af,this.d=l||this,this.set=c||uc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=zy,this.m=n,this.mt=r,this.tween=i},o}();Qt(ac+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return sc[o]=1});dn.TweenMax=dn.TweenLite=wt;dn.TimelineLite=dn.TimelineMax=Jt;ct=new Jt({sortChildren:!1,defaults:Gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=Zd;var jr=[],Ta={},Vy=[],Eh=0,Zo=function(e){return(Ta[e]||Vy).map(function(t){return t()})},Rl=function(){var e=Date.now(),t=[];e-Eh>2&&(Zo("matchMediaInit"),jr.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=vn.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Zo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Eh=e,Zo("matchMedia"))},cf=function(){function o(t,n){this.selector=n&&El(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){pt(n)&&(r=i,i=n,n=pt);var s=this,a=function(){var c=bt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=El(r)),bt=s,h=i.apply(s,arguments),pt(h)&&s._r.push(h),bt=c,s.selector=u,s.isReverted=!1,h};return s.last=a,n===pt?a(s):n?s[n]=a:a},e.ignore=function(n){var i=bt;bt=null,n(this),bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof qr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=jr.indexOf(this);~a&&jr.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),Gy=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){Wn(n)||(n={matches:n});var s=new cf(0,r||this.scope),a=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=vn.matchMedia(n[c]),l&&(jr.indexOf(s)<0&&jr.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rl):l.addEventListener("change",Rl)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Na={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jd(i)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,n,i){Rt(e)&&(e=Sn(e)[0]);var r=Xi(e||{}).get,s=n?Nd:Id;return n==="native"&&(n=""),e&&(t?s((an[t]&&an[t].get||r)(e,t,n,i)):function(a,l,c){return s((an[a]&&an[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Sn(e),e.length>1){var i=e.map(function(u){return tn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=an[t],a=Xi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;Cr._pt=0,h.init(e,n?u+n:u,Cr,0,[e]),h.render(1,h),Cr._pt&&dc(1,Cr)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=tn.to(e,er((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ji(e.ease,Gr.ease)),bh(Gr,e||{})},config:function(e){return bh(hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!an[a]&&!dn[a]&&La(t+" effect requires "+a+" plugin.")}),qo[t]=function(a,l,c){return n(Sn(a),Tn(l||{},r),c)},s&&(Jt.prototype[t]=function(a,l,c){return this.add(qo[t](a,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ge[e]=ji(t)},parseEase:function(e,t){return arguments.length?ji(e,t):Ge},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jt(e),i,r;for(n.smoothChildTiming=$t(e.smoothChildTiming),ct.remove(n),n._dp=0,n._time=n._tTime=ct._time,i=ct._first;i;)r=i._next,(t||!(!i._dur&&i instanceof wt&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=r;return zn(ct,n,0),n},context:function(e,t){return e?new cf(e,t):bt},matchMedia:function(e){return new Gy(e)},matchMediaRefresh:function(){return jr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Rl()},addEventListener:function(e,t){var n=Ta[e]||(Ta[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ta[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:by,wrapYoyo:My,distribute:Vd,random:Hd,snap:Gd,normalize:yy,getUnit:zt,clamp:gy,splitColor:Yd,toArray:Sn,selector:El,mapRange:Xd,pipe:xy,unitize:vy,interpolate:Sy,shuffle:zd},install:Cd,effects:qo,ticker:on,updateRoot:Jt.updateRoot,plugins:an,globalTimeline:ct,core:{PropTween:en,globals:Rd,Tween:wt,Timeline:Jt,Animation:qr,getCache:Xi,_removeLinkedListItem:Ya,reverting:function(){return Vt},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return ec=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Na[o]=wt[o]});on.add(Jt.updateRoot);Cr=Na.to({},{duration:0});var Hy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wy=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Hy(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Jo=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(Rt(r)&&(l={},Qt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Wy(a,r)}}}},tn=Na.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jo("roundProps",Al),Jo("modifiers"),Jo("snap",Gd))||Na;wt.version=Jt.version=tn.version="3.11.5";Ad=1;nc()&&Xr();Ge.Power0;Ge.Power1;Ge.Power2;Ge.Power3;Ge.Power4;Ge.Linear;Ge.Quad;Ge.Cubic;Ge.Quart;Ge.Quint;Ge.Strong;Ge.Elastic;Ge.Back;Ge.SteppedEase;Ge.Bounce;Ge.Sine;Ge.Expo;Ge.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ah,Mi,Ir,fc,Gi,Ch,pc,Xy=function(){return typeof window<"u"},ci={},Ui=180/Math.PI,Nr=Math.PI/180,Mr=Math.atan2,Rh=1e8,mc=/([A-Z])/g,qy=/(left|right|width|margin|padding|x)/i,jy=/[\s,\(]\S/,Vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ll=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ky=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},uf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Jy=function(e,t,n){return e.style[t]=n},$y=function(e,t,n){return e.style.setProperty(t,n)},Qy=function(e,t,n){return e._gsap[t]=n},eb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tb=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},nb=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},ut="transform",Nn=ut+"Origin",ib=function o(e,t){var n=this,i=this.target,r=i.style;if(e in ci){if(this.tfm=this.tfm||{},e!=="transform")e=Vn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=ti(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ti(i,e);else return Vn.transform.split(",").forEach(function(s){return o.call(n,s,t)});if(this.props.indexOf(ut)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=ut}(r||t)&&this.props.push(e,t,r[e])},df=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(mc,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=pc(),(!r||!r.isStart)&&!n[ut]&&(df(n),i.uncache=1)}},ff=function(e,t){var n={target:e,props:[],revert:rb,save:ib};return e._gsap||tn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},pf,Dl=function(e,t){var n=Mi.createElementNS?Mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mi.createElement(e);return n.style?n:Mi.createElement(e)},Hn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Yr(t)||t,1)||""},Lh="O,Moz,ms,Ms,Webkit".split(","),Yr=function(e,t,n){var i=t||Gi,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Lh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Lh[s]:"")+e},Pl=function(){Xy()&&window.document&&(Ah=window,Mi=Ah.document,Ir=Mi.documentElement,Gi=Dl("div")||{style:{}},Dl("div"),ut=Yr(ut),Nn=ut+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pf=!!Yr("perspective"),pc=tn.core.reverting,fc=1)},$o=function o(e){var t=Dl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Ir.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ir.removeChild(t),this.style.cssText=r,s},Dh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mf=function(e){var t;try{t=e.getBBox()}catch{t=$o.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===$o||(t=$o.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Dh(e,["x","cx","x1"])||0,y:+Dh(e,["y","cy","y1"])||0,width:0,height:0}:t},gf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mf(e))},Ps=function(e,t){if(t){var n=e.style;t in ci&&t!==Nn&&(t=ut),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(mc,"-$1").toLowerCase())):n.removeAttribute(t)}},Si=function(e,t,n,i,r,s){var a=new en(e._pt,t,n,0,1,s?hf:uf);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Ph={deg:1,rad:1,turn:1},sb={grid:1,flex:1},Ci=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=Gi.style,l=qy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",g,f,m,_;return i===s||!r||Ph[i]||Ph[s]?r:(s!=="px"&&!d&&(r=o(e,t,n,"px")),_=e.getCTM&&gf(e),(p||s==="%")&&(ci[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],_t(p?r/g*h:r/100*g)):(a[l?"width":"height"]=h+(d?s:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Mi||!f.appendChild)&&(f=Mi.body),m=f._gsap,m&&p&&m.width&&l&&m.time===on.time&&!m.uncache?_t(r/m.width*h):((p||s==="%")&&!sb[Hn(f,"display")]&&(a.position=Hn(e,"position")),f===e&&(a.position="static"),f.appendChild(Gi),g=Gi[u],f.removeChild(Gi),a.position="absolute",l&&p&&(m=Xi(f),m.time=on.time,m.width=f[u]),_t(d?g*r/h:g&&r?h/g*r:0))))},ti=function(e,t,n,i){var r;return fc||Pl(),t in Vn&&t!=="transform"&&(t=Vn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ci[t]&&t!=="transform"?(r=Ns(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Oa(Hn(e,Nn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fa[t]&&Fa[t](e,t,n)||Hn(e,t)||Dd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ci(e,t,r,n)+n:r},ab=function(e,t,n,i){if(!n||n==="none"){var r=Yr(t,e,1),s=r&&Hn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Hn(e,"borderTopColor"))}var a=new en(this._pt,e.style,t,0,1,of),l=0,c=0,u,h,d,p,g,f,m,_,b,x,v,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Hn(e,t)||i,e.style[t]=n),u=[n,i],Zd(u),n=u[0],i=u[1],d=n.match(Ar)||[],S=i.match(Ar)||[],S.length){for(;h=Ar.exec(i);)m=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(f=d[c++]||"")&&(p=parseFloat(f)||0,v=f.substr((p+"").length),m.charAt(1)==="="&&(m=Pr(p,m)+v),_=parseFloat(m),x=m.substr((_+"").length),l=Ar.lastIndex-x.length,x||(x=x||hn.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(p=Ci(e,t,f,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?hf:uf;return Td.test(i)&&(a.e=0),this._pt=a,a},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ob=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ih[n]||n,t[1]=Ih[i]||i,t.join(" ")},lb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ci[a]&&(l=1,a=a==="transformOrigin"?Nn:ut),Ps(n,a);l&&(Ps(n,ut),s&&(s.svg&&n.removeAttribute("transform"),Ns(n,1),s.uncache=1,df(i)))}},Fa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new en(e._pt,t,n,0,0,lb);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Is=[1,0,0,1,0,0],_f={},xf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nh=function(e){var t=Hn(e,ut);return xf(t)?Is:t.substr(7).match(wd).map(_t)},gc=function(e,t){var n=e._gsap||Xi(e),i=e.style,r=Nh(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Is:r):(r===Is&&!e.offsetParent&&e!==Ir&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ir.appendChild(e)),r=Nh(e),l?i.display=l:Ps(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Ir.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Il=function(e,t,n,i,r,s){var a=e._gsap,l=r||gc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],f=l[2],m=l[3],_=l[4],b=l[5],x=t.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,E,A,y,M;n?l!==Is&&(A=p*m-g*f)&&(y=v*(m/A)+S*(-f/A)+(f*b-m*_)/A,M=v*(-g/A)+S*(p/A)-(p*b-g*_)/A,v=y,S=M):(E=mf(e),v=E.x+(~x[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(x[1]||x[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(_=v-c,b=S-u,a.xOffset=h+(_*p+b*f)-_,a.yOffset=d+(_*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Nn]="0px 0px",s&&(Si(s,a,"xOrigin",c,v),Si(s,a,"yOrigin",u,S),Si(s,a,"xOffset",h,a.xOffset),Si(s,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Ns=function(e,t){var n=e._gsap||new ef(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=Hn(e,Nn)||"0",u,h,d,p,g,f,m,_,b,x,v,S,E,A,y,M,R,I,U,D,L,F,G,K,V,$,Z,de,k,J,ee,ie;return u=h=d=f=m=_=b=x=v=0,p=g=1,n.svg=!!(e.getCTM&&gf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),i.scale=i.rotate=i.translate="none"),A=gc(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Il(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,E=n.yOrigin||0,A!==Is&&(I=A[0],U=A[1],D=A[2],L=A[3],u=F=A[4],h=G=A[5],A.length===6?(p=Math.sqrt(I*I+U*U),g=Math.sqrt(L*L+D*D),f=I||U?Mr(U,I)*Ui:0,b=D||L?Mr(D,L)*Ui+f:0,b&&(g*=Math.abs(Math.cos(b*Nr))),n.svg&&(u-=S-(S*I+E*D),h-=E-(S*U+E*L))):(ie=A[6],J=A[7],Z=A[8],de=A[9],k=A[10],ee=A[11],u=A[12],h=A[13],d=A[14],y=Mr(ie,k),m=y*Ui,y&&(M=Math.cos(-y),R=Math.sin(-y),K=F*M+Z*R,V=G*M+de*R,$=ie*M+k*R,Z=F*-R+Z*M,de=G*-R+de*M,k=ie*-R+k*M,ee=J*-R+ee*M,F=K,G=V,ie=$),y=Mr(-D,k),_=y*Ui,y&&(M=Math.cos(-y),R=Math.sin(-y),K=I*M-Z*R,V=U*M-de*R,$=D*M-k*R,ee=L*R+ee*M,I=K,U=V,D=$),y=Mr(U,I),f=y*Ui,y&&(M=Math.cos(y),R=Math.sin(y),K=I*M+U*R,V=F*M+G*R,U=U*M-I*R,G=G*M-F*R,I=K,F=V),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,_=180-_),p=_t(Math.sqrt(I*I+U*U+D*D)),g=_t(Math.sqrt(G*G+ie*ie)),y=Mr(F,G),b=Math.abs(y)>2e-4?y*Ui:0,v=ee?1/(ee<0?-ee:ee):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!xf(Hn(e,ut)),K&&e.setAttribute("transform",K))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=d+s,n.scaleX=_t(p),n.scaleY=_t(g),n.rotation=_t(f)+a,n.rotationX=_t(m)+a,n.rotationY=_t(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=v+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Nn]=Oa(c)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?ub:pf?vf:cb,n.uncache=0,n},Oa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qo=function(e,t,n){var i=zt(t);return _t(parseFloat(t)+parseFloat(Ci(e,"x",n+"px",i)))+i},cb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,vf(e,t)},Ii="0deg",ds="0px",Ni=") ",vf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,f=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,v="",S=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Ii||u!==Ii)){var E=parseFloat(u)*Nr,A=Math.sin(E),y=Math.cos(E),M;E=parseFloat(h)*Nr,M=Math.cos(E),s=Qo(b,s,A*M*-x),a=Qo(b,a,-Math.sin(E)*-x),l=Qo(b,l,y*M*-x+x)}m!==ds&&(v+="perspective("+m+Ni),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||s!==ds||a!==ds||l!==ds)&&(v+=l!==ds||S?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Ni),c!==Ii&&(v+="rotate("+c+Ni),u!==Ii&&(v+="rotateY("+u+Ni),h!==Ii&&(v+="rotateX("+h+Ni),(d!==Ii||p!==Ii)&&(v+="skew("+d+", "+p+Ni),(g!==1||f!==1)&&(v+="scale("+g+", "+f+Ni),b.style[ut]=v||"translate(0, 0)"},ub=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,f=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(s),v=parseFloat(a),S,E,A,y,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Nr,c*=Nr,S=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(u*=Nr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,y*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,E*=M)),S=_t(S),E=_t(E),A=_t(A),y=_t(y)):(S=h,y=d,E=A=0),(x&&!~(s+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Ci(p,"x",s,"px"),v=Ci(p,"y",a,"px")),(g||f||m||_)&&(x=_t(x+g-(g*S+f*A)+m),v=_t(v+f-(g*E+f*y)+_)),(i||r)&&(M=p.getBBox(),x=_t(x+i/100*M.width),v=_t(v+r/100*M.height)),M="matrix("+S+","+E+","+A+","+y+","+x+","+v+")",p.setAttribute("transform",M),b&&(p.style[ut]=M)},hb=function(e,t,n,i,r){var s=360,a=Rt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ui:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*Rh)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*Rh)%s-~~(c/s)*s)),e._pt=d=new en(e._pt,t,n,i,c,Yy),d.e=u,d.u="deg",e._props.push(n),d},Fh=function(e,t){for(var n in t)e[n]=t[n];return e},db=function(e,t,n){var i=Fh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,h,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[ut]=t,a=Ns(n,1),Ps(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],s[ut]=t,a=Ns(n,1),s[ut]=c);for(l in ci)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(p=zt(c),g=zt(u),h=p!==g?Ci(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new en(e._pt,a,l,h,d-h,Ll),e._pt.u=g||0,e._props.push(l));Fh(a,i)};Qt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});Fa[e>1?"border"+o:o]=function(a,l,c,u,h){var d,p;if(arguments.length<4)return d=s.map(function(g){return ti(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},s.forEach(function(g,f){return p[g]=d[f]=d[f]||d[(f-1)/2|0]}),a.init(l,p,h)}});var yf={name:"css",register:Pl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,p,g,f,m,_,b,x,v,S,E,A,y;fc||Pl(),this.styles=this.styles||ff(e),y=this.styles.props,this.tween=n;for(f in t)if(f!=="autoRound"&&(u=t[f],!(an[f]&&tf(f,t,n,i,e,r)))){if(p=typeof u,g=Fa[f],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ls(u)),g)g(this,e,f,u,n)&&(A=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Ei.lastIndex=0,Ei.test(c)||(m=zt(c),_=zt(u)),_?m!==_&&(c=Ci(e,f,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,f),s.push(f),y.push(f,0,a[f]);else if(p!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],Rt(c)&&~c.indexOf("random(")&&(c=Ls(c)),zt(c+"")||(c+=hn.units[f]||zt(ti(e,f))||""),(c+"").charAt(1)==="="&&(c=ti(e,f))):c=ti(e,f),d=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),f in Vn&&(f==="autoAlpha"&&(d===1&&ti(e,"visibility")==="hidden"&&h&&(d=0),y.push("visibility",0,a.visibility),Si(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Vn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),x=f in ci,x){if(this.styles.save(f),v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ns(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new en(this._pt,a,ut,0,1,S.renderTransform,S,0,-1),v.dep=1),f==="scale")this._pt=new en(this._pt,S,"scaleY",S.scaleY,(b?Pr(S.scaleY,b+h):h)-S.scaleY||0,Ll),this._pt.u=0,s.push("scaleY",f),f+="X";else if(f==="transformOrigin"){y.push(Nn,0,a[Nn]),u=ob(u),S.svg?Il(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&Si(this,S,"zOrigin",S.zOrigin,_),Si(this,a,f,Oa(c),Oa(u)));continue}else if(f==="svgOrigin"){Il(e,u,1,E,0,this);continue}else if(f in _f){hb(this,S,f,d,b?Pr(d,b+u):u);continue}else if(f==="smoothOrigin"){Si(this,S,"smooth",S.smooth,u);continue}else if(f==="force3D"){S[f]=u;continue}else if(f==="transform"){db(this,u,e);continue}}else f in a||(f=Yr(f)||f);if(x||(h||h===0)&&(d||d===0)&&!jy.test(u)&&f in a)m=(c+"").substr((d+"").length),h||(h=0),_=zt(u)||(f in hn.units?hn.units[f]:m),m!==_&&(d=Ci(e,f,c,_)),this._pt=new en(this._pt,x?S:a,f,d,(b?Pr(d,b+h):h)-d,!x&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?Zy:Ll),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Ky);else if(f in a)ab.call(this,e,f,c,b?b+u:u);else if(f in e)this.add(e,f,c||e[f],b?b+u:u,i,r);else if(f!=="parseTransform"){rc(f,u);continue}x||(f in a?y.push(f,0,a[f]):y.push(f,1,c||e[f])),s.push(f)}}A&&lf(this)},render:function(e,t){if(t.tween._time||!pc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ti,aliases:Vn,getSetter:function(e,t,n){var i=Vn[t];return i&&i.indexOf(",")<0&&(t=i),t in ci&&t!==Nn&&(e._gsap.x||ti(e,"x"))?n&&Ch===n?t==="scale"?eb:Qy:(Ch=n||{})&&(t==="scale"?tb:nb):e.style&&!tc(e.style[t])?Jy:~t.indexOf("-")?$y:hc(e,t)},core:{_removeProperty:Ps,_getMatrix:gc}};tn.utils.checkPrefix=Yr;tn.core.getStyleSaver=ff;(function(o,e,t,n){var i=Qt(o+","+e+","+t,function(r){ci[r]=1});Qt(e,function(r){hn.units[r]="deg",_f[r]=1}),Vn[i[13]]=o+","+e,Qt(n,function(r){var s=r.split(":");Vn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){hn.units[o]="px"});tn.registerPlugin(yf);var Ja=tn.registerPlugin(yf)||tn;Ja.core.Tween;function fb(o){let e;return{c(){e=fe("canvas"),this.h()},l(t){e=pe(t,"CANVAS",{class:!0}),xe(e).forEach(he),this.h()},h(){ae(e,"class","h-full w-full")},m(t,n){Fs(t,e,n),o[4](e)},p:Gn,i:Gn,o:Gn,d(t){t&&he(e),o[4](null)}}}const el=300;function pb(o,e,t){let{mouse:n=new Be}=e,{parent:i}=e,r,s=new xd,a=new Be,l,c,u=1e3,h={current:0,target:0,ease:.1};Nl(()=>{r.addEventListener("click",R),window.addEventListener("resize",M),t(3,u=window.innerWidth);let p;const g=new _d,f=new Xa({canvas:r,antialias:!0,alpha:!0});f.setPixelRatio(window.devicePixelRatio),f.setSize(r.clientWidth,el),f.shadowMap.enabled=!0,f.outputEncoding=qe;const m=new Hl,_=new Dt(25,r.clientWidth/el,1,100);_.position.set(-5,1.5,8),_.lookAt(0,.1,0);const b=new ja(16777215);b.position.set(1,8,8),b.castShadow=!0,m.add(b);const x=new Kl(16777215,.2);m.add(x);const v=new Ha(15,15),S=new qx({color:0,opacity:.5}),E=new cn(v,S);E.receiveShadow=!0,E.rotation.x=-Math.PI/2,E.position.y=-1.09,m.add(E),new Ql().load("./models/bot.glb",I=>{I.scene.traverse(D=>{D.isObject3D&&(D.castShadow=!0)});const U=I.scene;m.add(U),p=new $l(U),l=[I.animations[0],I.animations[4],I.animations[5]].map(D=>p.clipAction(D)),c=[I.animations[1],I.animations[3]].map(D=>{let L=p.clipAction(D);return L.setLoop(Ol,1),L.clampWhenFinished=!0,L}),l.forEach(D=>{D.play()}),y()},void 0,I=>{console.error(I)});function y(){requestAnimationFrame(y);const I=g.getDelta();p.update(I),h.current=Ja.utils.interpolate(h.current,h.target,h.ease),m.rotation.y=-h.current,f.render(m,_)}function M(){const I=i.clientWidth,U=Math.min(I,el);_.aspect=I/U,_.updateProjectionMatrix(),f.setSize(I,U),t(3,u=window.innerWidth)}function R(I){let U=f.domElement.getBoundingClientRect();if(a.x=(I.clientX-U.left)/(U.right-U.left)*2-1,a.y=-((I.clientY-U.top)/(U.bottom-U.top))*2+1,s.setFromCamera(a,_),s.intersectObjects(m.children,!0).length>0){l.forEach(F=>{F.stop()}),p.timeScale=1.5,c.forEach(F=>{F.play()});const L=()=>{p.timeScale=1,c.forEach(F=>{F.stop()}),l.forEach(F=>{F.play()})};p.addEventListener("finished",L)}}});function d(p){vi[p?"unshift":"push"](()=>{r=p,t(0,r)})}return o.$$set=p=>{"mouse"in p&&t(1,n=p.mouse),"parent"in p&&t(2,i=p.parent)},o.$$.update=()=>{o.$$.dirty&10&&(h.target=(2*n.x/u-1)*.1)},[r,n,i,u,d]}class mb extends Ua{constructor(e){super(),ka(this,e,pb,fb,Ba,{mouse:1,parent:2})}}function gb(o){let e;return{c(){e=fe("canvas"),this.h()},l(t){e=pe(t,"CANVAS",{class:!0}),xe(e).forEach(he),this.h()},h(){ae(e,"class","h-full w-full")},m(t,n){Fs(t,e,n),o[4](e)},p:Gn,i:Gn,o:Gn,d(t){t&&he(e),o[4](null)}}}const tl=300;function _b(o,e,t){let{mouse:n=new Be}=e,{parent:i}=e,r,s=new xd,a=new Be,l,c,u=0,h,d=1e3,p={current:0,target:0,ease:.1};Nl(()=>{r.addEventListener("click",M),window.addEventListener("resize",y),t(3,d=window.innerWidth);let f;const m=new _d,_=new Xa({canvas:r,antialias:!0,alpha:!0});_.setPixelRatio(window.devicePixelRatio),_.setSize(r.clientWidth,tl),_.shadowMap.enabled=!0,_.outputEncoding=qe;const b=new Hl,x=new Dt(15,r.clientWidth/tl,1,100);x.position.set(-29,23,-29),x.lookAt(0,1,0);const v=new ja(16777215);v.position.set(-2,8,-5),v.castShadow=!0,b.add(v);const S=new Kl(16777215,.3);b.add(S),new Ql().load("./models/giant.glb",R=>{R.scene.traverse(U=>{U.isObject3D&&(U.name=="Giant"?U.castShadow=!0:U.receiveShadow=!0)}),h=R.scene.getObjectByName("Cube003"),h.morphTargetInfluences=[0];const I=R.scene;b.add(I),f=new $l(I),[R.animations[0],R.animations[1],R.animations[2]].forEach(U=>{f.clipAction(U).play()}),l=f.clipAction(R.animations[4]),c=f.clipAction(R.animations[5]),c.setLoop(Ol,1),c.clampWhenFinished=!0,l.play(),A()},void 0,R=>{console.error(R)});function A(){requestAnimationFrame(A);const R=m.getDelta();f.update(R);const I=Math.abs(Math.sin(u)*.5+.5);u+=R*5,h.morphTargetInfluences!==void 0&&(h.morphTargetInfluences[0]=I),p.current=Ja.utils.interpolate(p.current,p.target,p.ease),b.rotation.y=p.current,_.render(b,x)}function y(){const R=i.clientWidth,I=Math.min(R,tl);x.aspect=R/I,x.updateProjectionMatrix(),_.setSize(R,I),t(3,d=window.innerWidth)}function M(R){let I=_.domElement.getBoundingClientRect();if(a.x=(R.clientX-I.left)/(I.right-I.left)*2-1,a.y=-((R.clientY-I.top)/(I.bottom-I.top))*2+1,s.setFromCamera(a,x),s.intersectObjects(b.children,!0).length>0){l.stop(),c.play();const D=()=>{c.stop(),l.play()};f.addEventListener("finished",D)}}});function g(f){vi[f?"unshift":"push"](()=>{r=f,t(0,r)})}return o.$$set=f=>{"mouse"in f&&t(1,n=f.mouse),"parent"in f&&t(2,i=f.parent)},o.$$.update=()=>{o.$$.dirty&10&&(p.target=(2*n.x/d-1)*.1)},[r,n,i,d,g]}class xb extends Ua{constructor(e){super(),ka(this,e,_b,gb,Ba,{mouse:1,parent:2})}}function vb(o){let e;return{c(){e=fe("canvas"),this.h()},l(t){e=pe(t,"CANVAS",{class:!0}),xe(e).forEach(he),this.h()},h(){ae(e,"class","h-full w-full")},m(t,n){Fs(t,e,n),o[3](e)},p:Gn,i:Gn,o:Gn,d(t){t&&he(e),o[3](null)}}}const nl=300;function yb(o,e,t){let{animCoeff:n}=e,{parent:i}=e,r,s=1,a={current:n,target:n,ease:.01};Nl(()=>{window.addEventListener("resize",_);let c;const u=new Xa({canvas:r,antialias:!0,alpha:!0});u.setPixelRatio(window.devicePixelRatio),u.setSize(r.clientWidth,nl),u.shadowMap.enabled=!0,u.outputEncoding=qe;const h=new Hl,d=new Dt(15,r.clientWidth/nl,1,100);d.position.set(0,0,18),d.lookAt(0,0,0);const p=new ja(16777215);p.position.set(2,7,7),p.castShadow=!0,h.add(p);const g=new Kl(16777215,.5);h.add(g),new Ql().load("./models/bacteria.glb",b=>{const x=b.scene;h.add(x),c=new $l(x),b.animations.forEach(v=>{c.clipAction(v).play()}),s=b.animations[0].duration,m()},void 0,b=>{console.error(b)});function m(){requestAnimationFrame(m),a.current=Ja.utils.interpolate(a.current,a.target,a.ease),c.setTime(n*s),u.render(h,d)}function _(){const b=i.clientWidth,x=Math.min(b,nl);d.aspect=b/x,d.updateProjectionMatrix(),u.setSize(b,x)}});function l(c){vi[c?"unshift":"push"](()=>{r=c,t(0,r)})}return o.$$set=c=>{"animCoeff"in c&&t(1,n=c.animCoeff),"parent"in c&&t(2,i=c.parent)},o.$$.update=()=>{o.$$.dirty&2&&(a.target=n)},[r,n,i,l]}class bb extends Ua{constructor(e){super(),ka(this,e,yb,vb,Ba,{animCoeff:1,parent:2})}}const{window:Mb}=wf;function Oh(o,e,t){const n=o.slice();return n[22]=e[t],n}function Uh(o){let e,t,n=o[22].position+"",i,r,s,a=o[22].company+"",l,c,u=o[22].type+"",h,d,p,g=o[22].from.toLocaleString("default",{month:"short",year:"numeric"})+"",f,m,_=o[22].until.toLocaleString("default",{month:"short",year:"numeric"})+"",b,x,v,S=o[22].city+"",E,A,y=o[22].country+"",M,R,I,U=o[22].skills.join(" • ")+"",D,L;return{c(){e=fe("div"),t=fe("div"),i=We(n),r=Qe(),s=fe("div"),l=We(a),c=We(" • "),h=We(u),d=Qe(),p=fe("div"),f=We(g),m=We(" - "),b=We(_),x=Qe(),v=fe("div"),E=We(S),A=We(", "),M=We(y),R=Qe(),I=fe("div"),D=We(U),L=Qe(),this.h()},l(F){e=pe(F,"DIV",{class:!0});var G=xe(e);t=pe(G,"DIV",{class:!0});var K=xe(t);i=Xe(K,n),K.forEach(he),r=et(G),s=pe(G,"DIV",{class:!0});var V=xe(s);l=Xe(V,a),c=Xe(V," • "),h=Xe(V,u),V.forEach(he),d=et(G),p=pe(G,"DIV",{class:!0});var $=xe(p);f=Xe($,g),m=Xe($," - "),b=Xe($,_),$.forEach(he),x=et(G),v=pe(G,"DIV",{class:!0});var Z=xe(v);E=Xe(Z,S),A=Xe(Z,", "),M=Xe(Z,y),Z.forEach(he),R=et(G),I=pe(G,"DIV",{class:!0});var de=xe(I);D=Xe(de,U),de.forEach(he),L=et(G),G.forEach(he),this.h()},h(){ae(t,"class","text-gray-800 text-xl font-semibold"),ae(s,"class","text-gray-800 text-lg italic"),ae(p,"class","text-gray-500 text-sm"),ae(v,"class","text-gray-500 text-sm"),ae(I,"class","text-gray-800 text-sm font-semibold"),ae(e,"class","text-center my-12")},m(F,G){Fs(F,e,G),j(e,t),j(t,i),j(e,r),j(e,s),j(s,l),j(s,c),j(s,h),j(e,d),j(e,p),j(p,f),j(p,m),j(p,b),j(e,x),j(e,v),j(v,E),j(v,A),j(v,M),j(e,R),j(e,I),j(I,D),j(e,L)},p:Gn,d(F){F&&he(e)}}}function Sb(o){let e,t,n,i,r,s,a,l,c,u,h,d,p,g,f,m,_,b,x,v,S,E,A,y,M,R,I,U,D,L,F,G,K,V,$,Z,de,k,J,ee,ie,z,Te,ve,be,ce,Ye,Le,Ee,lt,xt,at,Nt,st,Ue,Ft,Ht,C,w,q,te,ne,se,Ae,oe,Y,ye,Se,me,we,ge,Ne,Ke,mt,P,H,Q,le,_e,He,dt,vt,En,Ze,nn,Ot,rr,fn,ui,pn,T,B,X,O,W,Me,Ce,Pe,Re,De,Ie,ke,ot,Lt,mn;U=new mb({props:{mouse:o[0],parent:o[2]}}),ee=new xb({props:{mouse:o[0],parent:o[2]}}),at=new bb({props:{animCoeff:o[1],parent:o[4]}});let Kt=fh,ze=[];for(let ue=0;ue<Kt.length;ue+=1)ze[ue]=Uh(Oh(o,Kt,ue));return{c(){e=fe("div"),t=fe("nav"),n=fe("div"),i=fe("div"),r=fe("p"),s=We("Jure Vito Srovin"),a=Qe(),l=fe("button"),c=fe("i"),u=Qe(),h=fe("div"),d=fe("button"),p=We("Interests"),g=Qe(),f=fe("button"),m=We("Experience"),_=Qe(),b=fe("button"),x=We("Contact"),v=Qe(),S=fe("div"),E=fe("div"),A=fe("h2"),y=We("Interests"),M=Qe(),R=fe("div"),I=fe("div"),no(U.$$.fragment),D=Qe(),L=fe("div"),F=fe("div"),G=fe("h2"),K=We("Machine Learning"),V=Qe(),$=fe("div"),Z=We("Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models."),de=Qe(),k=fe("div"),J=fe("div"),no(ee.$$.fragment),ie=Qe(),z=fe("div"),Te=fe("div"),ve=fe("h2"),be=We("Computer Graphics"),ce=Qe(),Ye=fe("div"),Le=We("Before pursuing computer science, I wanted to work as a 3D artist. Since computer science program offered a 3D modeling course in the third year of the bachelor's degree, I made the decision to enroll in the program."),Ee=Qe(),lt=fe("div"),xt=fe("div"),no(at.$$.fragment),Nt=Qe(),st=fe("div"),Ue=fe("div"),Ft=fe("h2"),Ht=We("Molecular Biology"),C=Qe(),w=fe("div"),q=We("It has the enormous potential to revolutionize healthcare and enhance millions of lives. Use of high performance computing and machine learning can cut the time and money spent during the development of novel drugs."),te=Qe(),ne=fe("div"),se=fe("h2"),Ae=We("Experience"),oe=Qe();for(let ue=0;ue<ze.length;ue+=1)ze[ue].c();Y=Qe(),ye=fe("div"),Se=fe("h2"),me=We("Contact"),we=Qe(),ge=fe("div"),Ne=fe("div"),Ke=fe("img"),P=Qe(),H=fe("div"),Q=fe("div"),le=We("My name is "),_e=fe("span"),He=We("Jure Vito Srovin"),dt=We(" and I am "),vt=We(o[7]),En=We(` years old student at the Faculty of Computer and Information Science, University of Ljubljana. \r
                        Currently I am working on my master's thesis titled\r
                        `),Ze=fe("span"),nn=We('"Simulation of molecular docking using deep learning"'),Ot=We(`.\r
                        My hobbies include 3D modeling, lifting weights and traveling.`),rr=Qe(),fn=fe("div"),ui=fe("div"),pn=fe("a"),T=fe("i"),B=We(" GitHub"),X=Qe(),O=fe("div"),W=fe("a"),Me=fe("i"),Ce=We(" LinkedIn"),Pe=Qe(),Re=fe("div"),De=fe("a"),Ie=fe("i"),ke=We(" Email"),this.h()},l(ue){e=pe(ue,"DIV",{});var Mt=xe(e);t=pe(Mt,"NAV",{class:!0});var $e=xe(t);n=pe($e,"DIV",{class:!0});var Ut=xe(n);i=pe(Ut,"DIV",{class:!0});var An=xe(i);r=pe(An,"P",{class:!0});var gt=xe(r);s=Xe(gt,"Jure Vito Srovin"),gt.forEach(he),a=et(An),l=pe(An,"BUTTON",{id:!0,class:!0});var jn=xe(l);c=pe(jn,"I",{class:!0}),xe(c).forEach(he),jn.forEach(he),An.forEach(he),u=et(Ut),h=pe(Ut,"DIV",{id:!0,class:!0});var ft=xe(h);d=pe(ft,"BUTTON",{class:!0});var Fn=xe(d);p=Xe(Fn,"Interests"),Fn.forEach(he),g=et(ft),f=pe(ft,"BUTTON",{class:!0});var sr=xe(f);m=Xe(sr,"Experience"),sr.forEach(he),_=et(ft),b=pe(ft,"BUTTON",{class:!0});var kt=xe(b);x=Xe(kt,"Contact"),kt.forEach(he),ft.forEach(he),Ut.forEach(he),$e.forEach(he),v=et(Mt),S=pe(Mt,"DIV",{class:!0});var On=xe(S);E=pe(On,"DIV",{class:!0});var Un=xe(E);A=pe(Un,"H2",{id:!0,class:!0});var es=xe(A);y=Xe(es,"Interests"),es.forEach(he),M=et(Un),R=pe(Un,"DIV",{class:!0});var zs=xe(R);I=pe(zs,"DIV",{class:!0});var _c=xe(I);io(U.$$.fragment,_c),_c.forEach(he),D=et(zs),L=pe(zs,"DIV",{class:!0});var xc=xe(L);F=pe(xc,"DIV",{class:!0});var Vs=xe(F);G=pe(Vs,"H2",{class:!0});var vc=xe(G);K=Xe(vc,"Machine Learning"),vc.forEach(he),V=et(Vs),$=pe(Vs,"DIV",{});var yc=xe($);Z=Xe(yc,"Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models."),yc.forEach(he),Vs.forEach(he),xc.forEach(he),zs.forEach(he),de=et(Un),k=pe(Un,"DIV",{class:!0});var Gs=xe(k);J=pe(Gs,"DIV",{class:!0});var bc=xe(J);io(ee.$$.fragment,bc),bc.forEach(he),ie=et(Gs),z=pe(Gs,"DIV",{class:!0});var Mc=xe(z);Te=pe(Mc,"DIV",{class:!0});var Hs=xe(Te);ve=pe(Hs,"H2",{class:!0});var Sc=xe(ve);be=Xe(Sc,"Computer Graphics"),Sc.forEach(he),ce=et(Hs),Ye=pe(Hs,"DIV",{});var wc=xe(Ye);Le=Xe(wc,"Before pursuing computer science, I wanted to work as a 3D artist. Since computer science program offered a 3D modeling course in the third year of the bachelor's degree, I made the decision to enroll in the program."),wc.forEach(he),Hs.forEach(he),Mc.forEach(he),Gs.forEach(he),Ee=et(Un),lt=pe(Un,"DIV",{class:!0});var Ws=xe(lt);xt=pe(Ws,"DIV",{class:!0});var Tc=xe(xt);io(at.$$.fragment,Tc),Tc.forEach(he),Nt=et(Ws),st=pe(Ws,"DIV",{class:!0});var Ec=xe(st);Ue=pe(Ec,"DIV",{class:!0});var Xs=xe(Ue);Ft=pe(Xs,"H2",{class:!0});var Ac=xe(Ft);Ht=Xe(Ac,"Molecular Biology"),Ac.forEach(he),C=et(Xs),w=pe(Xs,"DIV",{});var Cc=xe(w);q=Xe(Cc,"It has the enormous potential to revolutionize healthcare and enhance millions of lives. Use of high performance computing and machine learning can cut the time and money spent during the development of novel drugs."),Cc.forEach(he),Xs.forEach(he),Ec.forEach(he),Ws.forEach(he),Un.forEach(he),te=et(On),ne=pe(On,"DIV",{class:!0});var qs=xe(ne);se=pe(qs,"H2",{id:!0,class:!0});var Rc=xe(se);Ae=Xe(Rc,"Experience"),Rc.forEach(he),oe=et(qs);for(let to=0;to<ze.length;to+=1)ze[to].l(qs);qs.forEach(he),Y=et(On),ye=pe(On,"DIV",{class:!0});var js=xe(ye);Se=pe(js,"H2",{id:!0,class:!0});var Lc=xe(Se);me=Xe(Lc,"Contact"),Lc.forEach(he),we=et(js),ge=pe(js,"DIV",{class:!0});var Ys=xe(ge);Ne=pe(Ys,"DIV",{class:!0});var Dc=xe(Ne);Ke=pe(Dc,"IMG",{class:!0,alt:!0,src:!0}),Dc.forEach(he),P=et(Ys),H=pe(Ys,"DIV",{class:!0});var Ks=xe(H);Q=pe(Ks,"DIV",{});var hi=xe(Q);le=Xe(hi,"My name is "),_e=pe(hi,"SPAN",{});var Pc=xe(_e);He=Xe(Pc,"Jure Vito Srovin"),Pc.forEach(he),dt=Xe(hi," and I am "),vt=Xe(hi,o[7]),En=Xe(hi,` years old student at the Faculty of Computer and Information Science, University of Ljubljana. \r
                        Currently I am working on my master's thesis titled\r
                        `),Ze=pe(hi,"SPAN",{class:!0});var Ic=xe(Ze);nn=Xe(Ic,'"Simulation of molecular docking using deep learning"'),Ic.forEach(he),Ot=Xe(hi,`.\r
                        My hobbies include 3D modeling, lifting weights and traveling.`),hi.forEach(he),rr=et(Ks),fn=pe(Ks,"DIV",{class:!0});var ar=xe(fn);ui=pe(ar,"DIV",{class:!0});var Nc=xe(ui);pn=pe(Nc,"A",{class:!0,href:!0,target:!0,rel:!0});var $a=xe(pn);T=pe($a,"I",{class:!0}),xe(T).forEach(he),B=Xe($a," GitHub"),$a.forEach(he),Nc.forEach(he),X=et(ar),O=pe(ar,"DIV",{class:!0});var Fc=xe(O);W=pe(Fc,"A",{class:!0,href:!0,target:!0,rel:!0});var Qa=xe(W);Me=pe(Qa,"I",{class:!0}),xe(Me).forEach(he),Ce=Xe(Qa," LinkedIn"),Qa.forEach(he),Fc.forEach(he),Pe=et(ar),Re=pe(ar,"DIV",{class:!0});var Oc=xe(Re);De=pe(Oc,"A",{class:!0,href:!0,target:!0,rel:!0});var eo=xe(De);Ie=pe(eo,"I",{class:!0}),xe(Ie).forEach(he),ke=Xe(eo," Email"),eo.forEach(he),Oc.forEach(he),ar.forEach(he),Ks.forEach(he),Ys.forEach(he),js.forEach(he),On.forEach(he),Mt.forEach(he),this.h()},h(){ae(r,"class","text-gray-200"),ae(c,"class","flex fa-solid fa-bars"),ae(l,"id","expand-btn"),ae(l,"class","px-2 text-gray-300 hover:text-white sm:hidden"),ae(i,"class","flex items-center justify-between w-full"),ae(d,"class","text-gray-400 mx-4 py-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:0%_0.15em] hover:bg-[length:100%_0.15em] bg-bottom bg-no-repeat transition-all duration-150 ease-in-out hover:text-white"),ae(f,"class","text-gray-400 mx-4 py-0.5 bg-gradient-to-r from-blue-500 to-violet-500 bg-[length:0%_0.15em] hover:bg-[length:100%_0.15em] bg-bottom bg-no-repeat transition-all duration-150 ease-in-out hover:text-white"),ae(b,"class","text-gray-400 mx-4 py-0.5 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-[length:0%_0.15em] hover:bg-[length:100%_0.15em] bg-bottom bg-no-repeat transition-all duration-150 ease-in-out hover:text-white"),ae(h,"id","section-btns"),ae(h,"class","flex w-full h-0 sm:h-auto transition-all duration-10 overflow-hidden sm:overflow-visible justify-evenly items-center flex-col sm:flex-row"),ae(n,"class","flex flex-col sm:flex-row items-center justify-between font-mont font-bold max-w-3xl mx-auto"),ae(t,"class","bg-gray-800 py-3 px-4 shadow-lg shadow-gray-400"),ae(A,"id","interests"),ae(A,"class","font-mont font-semibold text-4xl text-center m-2"),ae(I,"class","basis-3/5 overflow-hidden"),ae(G,"class","font-mont text-2xl my-2 mx-auto text-center pb-1 bg-gradient-to-r from-red-500 to-amber-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]"),ae(F,"class","flex flex-col"),ae(L,"class","basis-2/5"),ae(R,"class","group flex flex-col my-10 sm:flex-row group"),ae(J,"class","basis-3/5 overflow-hidden"),ae(ve,"class","font-mont text-2xl my-2 mx-auto text-center pb-1 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]"),ae(Te,"class","flex flex-col"),ae(z,"class","basis-2/5"),ae(k,"class","group flex flex-col my-10 sm:flex-row-reverse"),ae(xt,"class","basis-3/5 overflow-hidden"),ae(Ft,"class","font-mont text-2xl my-2 mx-auto text-center pb-1 bg-gradient-to-r from-lime-500 to-emerald-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]"),ae(Ue,"class","flex flex-col"),ae(st,"class","basis-2/5"),ae(lt,"class","group flex flex-col my-10 sm:flex-row group"),ae(E,"class","my-8"),ae(se,"id","experience"),ae(se,"class","font-mont font-semibold text-4xl text-center m-2"),ae(ne,"class","my-8"),ae(Se,"id","contact"),ae(Se,"class","font-mont font-semibold text-4xl text-center m-2"),ae(Ke,"class","rounded-full w-2/3"),ae(Ke,"alt","profile"),bf(Ke.src,mt="pics/me.jpg")||ae(Ke,"src",mt),ae(Ne,"class","basis-1/2 flex items-center justify-center my-5"),ae(Ze,"class","italic"),ae(T,"class","fa-brands fa-github w-[1em] h-[1em]"),ae(pn,"class","py-1 bg-bottom bg-no-repeat duration-200 ease-in-out bg-gradient-to-r from-slate-600 to-zinc-500 bg-[length:0%_0.15em] transition-size hover:bg-[length:100%_0.15em]"),ae(pn,"href","https://www.github.com/jurevito"),ae(pn,"target","_blank"),ae(pn,"rel","noreferrer"),ae(ui,"class","basis-1/3 flex items-center justify-center"),ae(Me,"class","fa-brands fa-linkedin w-[1em] h-[1em]"),ae(W,"class","py-1 bg-bottom bg-no-repeat duration-200 ease-in-out bg-gradient-to-r from-blue-500 to-cyan-500 bg-[length:0%_0.15em] transition-size hover:bg-[length:100%_0.15em]"),ae(W,"href","https://www.linkedin.com/in/jure-vito-srovin-587746245"),ae(W,"target","_blank"),ae(W,"rel","noreferrer"),ae(O,"class","basis-1/3 flex items-center justify-center"),ae(Ie,"class","fa-solid fa-inbox w-[1em] h-[1em]"),ae(De,"class","py-1 bg-bottom bg-no-repeat duration-200 ease-in-out bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-[length:0%_0.15em] transition-size hover:bg-[length:100%_0.15em]"),ae(De,"href","mailto:jure.vito@gmail.com"),ae(De,"target","_blank"),ae(De,"rel","noreferrer"),ae(Re,"class","basis-1/3 flex items-center justify-center"),ae(fn,"class","flex flex-row text-center mt-6"),ae(H,"class","basis-1/2 my-5"),ae(ge,"class","flex flex-col my-5 sm:flex-row"),ae(ye,"class","my-8"),ae(S,"class","max-w-3xl w-4/5 mx-auto my-12")},m(ue,Mt){Fs(ue,e,Mt),j(e,t),j(t,n),j(n,i),j(i,r),j(r,s),j(i,a),j(i,l),j(l,c),o[11](l),j(n,u),j(n,h),j(h,d),j(d,p),j(h,g),j(h,f),j(f,m),j(h,_),j(h,b),j(b,x),o[15](h),j(e,v),j(e,S),j(S,E),j(E,A),j(A,y),j(E,M),j(E,R),j(R,I),ro(U,I,null),o[16](I),j(R,D),j(R,L),j(L,F),j(F,G),j(G,K),j(F,V),j(F,$),j($,Z),j(E,de),j(E,k),j(k,J),ro(ee,J,null),o[17](J),j(k,ie),j(k,z),j(z,Te),j(Te,ve),j(ve,be),j(Te,ce),j(Te,Ye),j(Ye,Le),j(E,Ee),j(E,lt),j(lt,xt),ro(at,xt,null),o[18](xt),j(lt,Nt),j(lt,st),j(st,Ue),j(Ue,Ft),j(Ft,Ht),j(Ue,C),j(Ue,w),j(w,q),j(S,te),j(S,ne),j(ne,se),j(se,Ae),j(ne,oe);for(let $e=0;$e<ze.length;$e+=1)ze[$e].m(ne,null);j(S,Y),j(S,ye),j(ye,Se),j(Se,me),j(ye,we),j(ye,ge),j(ge,Ne),j(Ne,Ke),j(ge,P),j(ge,H),j(H,Q),j(Q,le),j(Q,_e),j(_e,He),j(Q,dt),j(Q,vt),j(Q,En),j(Q,Ze),j(Ze,nn),j(Q,Ot),j(H,rr),j(H,fn),j(fn,ui),j(ui,pn),j(pn,T),j(pn,B),j(fn,X),j(fn,O),j(O,W),j(W,Me),j(W,Ce),j(fn,Pe),j(fn,Re),j(Re,De),j(De,Ie),j(De,ke),ot=!0,Lt||(mn=[or(Mb,"scroll",o[9]),or(l,"click",o[10]),or(d,"click",o[12]),or(f,"click",o[13]),or(b,"click",o[14]),or(e,"mousemove",o[8])],Lt=!0)},p(ue,[Mt]){const $e={};Mt&1&&($e.mouse=ue[0]),Mt&4&&($e.parent=ue[2]),U.$set($e);const Ut={};Mt&1&&(Ut.mouse=ue[0]),Mt&4&&(Ut.parent=ue[2]),ee.$set(Ut);const An={};if(Mt&2&&(An.animCoeff=ue[1]),Mt&16&&(An.parent=ue[4]),at.$set(An),Mt&0){Kt=fh;let gt;for(gt=0;gt<Kt.length;gt+=1){const jn=Oh(ue,Kt,gt);ze[gt]?ze[gt].p(jn,Mt):(ze[gt]=Uh(jn),ze[gt].c(),ze[gt].m(ne,null))}for(;gt<ze.length;gt+=1)ze[gt].d(1);ze.length=Kt.length}},i(ue){ot||(so(U.$$.fragment,ue),so(ee.$$.fragment,ue),so(at.$$.fragment,ue),ot=!0)},o(ue){ao(U.$$.fragment,ue),ao(ee.$$.fragment,ue),ao(at.$$.fragment,ue),ot=!1},d(ue){ue&&he(e),o[11](null),o[15](null),oo(U),o[16](null),oo(ee),o[17](null),oo(at),o[18](null),Mf(ze,ue),Lt=!1,Sf(mn)}}}function il(o){const t=document.getElementById(o).offsetTop;console.log("Button clicked: "+t),window.scrollTo({top:t,behavior:"smooth"})}function wb(o,e,t){let n=new Be,i=0,r,s,a;const u=Math.abs(new Date().getTime()-new Date("1998-06-25").getTime()),h=Math.floor(u/(1e3*60*60*24*365.25));function d(M){t(0,n.x=M.clientX,n),t(0,n.y=M.clientY,n)}function p(){let M=a.getBoundingClientRect().top,R=a.getBoundingClientRect().bottom;const I=(D,L,F)=>Math.min(Math.max(D,L),F),U=(window.innerHeight-R)/(M-R+window.innerHeight);t(1,i=I(U,.1,.9))}let g,f;function m(){f.classList.toggle("h-0"),f.classList.toggle("h-36")}function _(M){vi[M?"unshift":"push"](()=>{g=M,t(5,g)})}const b=()=>{il("interests")},x=()=>{il("experience")},v=()=>{il("contact")};function S(M){vi[M?"unshift":"push"](()=>{f=M,t(6,f)})}function E(M){vi[M?"unshift":"push"](()=>{r=M,t(2,r)})}function A(M){vi[M?"unshift":"push"](()=>{s=M,t(3,s)})}function y(M){vi[M?"unshift":"push"](()=>{a=M,t(4,a)})}return[n,i,r,s,a,g,f,h,d,p,m,_,b,x,v,S,E,A,y]}class Eb extends Ua{constructor(e){super(),ka(this,e,wb,Sb,Ba,{})}}export{Eb as default};
