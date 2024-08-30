import { useState, useEffect } from 'react';

const CountdownComponent = () => {
  // const dateArray = [
  //   '2024-08-28T23:59:59',
  //   '2024-08-29T23:59:59',
  //   '2024-08-30T23:59:59',
  //   '2024-08-31T23:59:59',
  // ];
  const [daterray,setDateArray] = useState([]);
  const handleSetDateArray = (value)=>{
    setDateArray((prev)=>[...prev,value])
  }

  const calculateTimeLeft = (targetDate) => {
    const difference = new Date(targetDate) - new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
  };
  const [timeLeftArray, setTimeLeftArray] = useState([]);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (isClient) {
      setTimeLeftArray(dateArray.map((date) => calculateTimeLeft(date)));
      const timer = setInterval(() => {
        setTimeLeftArray(dateArray.map((date) => calculateTimeLeft(date)));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isClient]);
  return (
    <div className="flex flex-wrap justify-center space-x-4 mt-10">
      {timeLeftArray.map((timeLeft, index) => (
        <div
        onChange={()=>handleSetDateArray('2024-08-31T23:59:59')}
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 text-center m-2"
        >
          <p className="text-3xl font-bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
            {timeLeft.seconds}s
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownComponent;
