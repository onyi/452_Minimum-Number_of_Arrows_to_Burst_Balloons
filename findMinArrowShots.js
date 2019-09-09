const findMinArrowShots = (points) => {
    
    if (points.length === 0) return 0;
    points.sort( (a, b) => a[0] - b[0]);
    prevEnd = points[0][1];

    console.log(`Points after: ${points}`);

    let count = 0;
    for(let i = 1; i < points.length; i++){
        
        let currStart = points[i][0];
        let currEnd = points[i][1];
        if(currStart > prevEnd){
            count++;
            prevEnd = currEnd;
        }else{
            prevEnd = Math.min(prevEnd, currEnd );
        }
        
    }
    count++;
    return count;
}


let b = [[7,15],[6,14],[8,12],[3,4],[4,13],[6,14],[9,11],[6,12],[4,13]];

findMinArrowShots(b)