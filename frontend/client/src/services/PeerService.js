
class PeerService {
    constructor() {
        if(!this.peer) {
            this.peer = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: [
                            "stun:stun.l.google.com:19302",
                            "stun:global.stun.twilio.com:3478",
                        ],
                    },
                ],
            });
        }
    }

    async createAnswer(offer) {
        if(this.peer) {
            await this.peer.setRemoteDescription(offer);
            const answer = await this.peer.createAnswer();
            await this.peer.setLocalDescription(new RTCSessionDescription(answer));
            return answer;
        }
    }

    async setRemoteDescription(answer) {
        if(this.peer) {
            await this.peer.setRemoteDescription(new RTCSessionDescription(answer));
        }
    }

    async createOffer() {
        if(this.peer) {
            const offer = await this.peer.createOffer();
            await this.peer.setLocalDescription(new RTCSessionDescription(offer));
            return offer;
        }
    }
}

const peerservice = new PeerService();
export default peerservice;