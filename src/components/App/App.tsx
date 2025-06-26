<div className={css.app}></div>

import css from './App.module.css';
import { CafeInfo } from '../CafeInfo/CafeInfo';
import { VoteOption } from '../VoteOption/VoteOption';
import { VoteStars } from '../VoteStars/VoteStats';
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';

export const App = () => {
    const [votes, setVotes] = useState<Votes>({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  
    const handleVote = (type: VoteType) => {
      setVotes(prevVotes => ({
        ...prevVotes,
        [type]: prevVotes[type] + 1,
      }));
    };
    const resetVotes = () => {
        setVotes({
          good: 0,
          neutral: 0,
          bad: 0,
        });
      };
    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes === 0 ? 0 : Math.round((votes.good / totalVotes) * 100);
    return (
      <div className={css.app}>
        <CafeInfo />
        <VoteOption
          onVote={handleVote}
          onReset={resetVotes}
          canReset={true}
        />
        <VoteStars
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      </div>
    );
  };