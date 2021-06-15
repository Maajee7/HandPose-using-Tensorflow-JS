// Points for fingers
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};

// Drawing Functions
export const drawHand = (predictions, ctx) => {
    // Check if we have predictions
    if(predictions.length > 0) {
        // loop through each prediction
        predictions.forEach((prediction) => {
            // Grabing landmark
            const landmarks = prediction.landmarks;

            // loop through fingers
            for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                let finger = Object.keys(fingerJoints)[j];

                // Loop through pairs of joints
                for(let k=0; k<fingerJoints[finger].length -1; k++) {

                    // get pairs of joints
                    const firstJointIndex = fingerJoints[finger][k];
                    const secondJointIndex = fingerJoints[finger][k+1];

                    // Draw path 
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1],
                    );
                    ctx.lineTo(
                        landmarks[secondJointIndex][0],
                        landmarks[secondJointIndex][1],
                    );
                    ctx.strokeStyle = "plum"
                    ctx.lineWidth = 4
                    ctx.stroke()
                }
            }

            // loop through landmarks and draw key points
            for (let i=0; i<landmarks.length; i++) {
                // Get x points
                const x = landmarks[i][0];

                // Get y points
                const y = landmarks[i][1];

                // Start drawing
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3 * Math.PI)

                // Set line color
                ctx.fillStyle = "indigo";
                ctx.fill();
            }
        })
    } 
}