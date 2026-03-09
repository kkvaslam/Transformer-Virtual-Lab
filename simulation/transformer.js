// Transformer model
// Modify NsNp and Vp as needed

const NsNp = 2.5;     // Example turns ratio
const Vp_set = 5;      // Primary voltage (can be adjusted)

function computeValues(R) {
    const Vp = Vp_set;
    const Vs = Vp * NsNp;

    const Is = Vs / R;
    const Ip = Is / NsNp;

    const Pin = Vp * Ip;
    const Pout = Vs * Is;
    const efficiency = Pout / Pin;

    return { Vp, Ip, Pin, Vs, Is, Pout, efficiency };
}
