## Bashpound.about
<code-group>
<code-block title="JS">

```js{4}
import interest from '@/genome'

const bashpound = (interest) => ({
    Domain: 'Smart Jack',
    Department: '연구파트',
    Title: '선임개발자',
    Since: '2020'
})

```
</code-block>
<code-block title="Java">

```java{7}
public class Bashpound {

    Job job;
    List<? extends Genome> genome;

    public Bashpound(Job job, List<?> genome) {
        this.job = new Job("Smart Jack", "연구파트", "선임개발자", 2020);
        this.genome = genome;
    }

    class Job extends Interest {
        
        String domain;
        String department;
        String title;
        int since;

        public Job (String domain, String department, String title, int since) {
            this.domain = domain;
            this.department = department;
            this.title = title;
            this.since = since;
        }
    }
}
```
</code-block>
</code-group>


[**화학**](http://yonsei.ac.kr) 전공, [**금속학**](http://postech.ac.kr) 석사를 마치고 [**전자재료회사**](http://dongjin.com)에 연구원으로 입사, 이후 [**프랑스 유리 회사**](http://saint-gobain.com)로 이직한 뒤 박막 연구를 하다가 [**AI/Web 개발자**](http://smartjackwp.com)로 전직한, 그러한 성향의 개발자.

알고리즘, AI, Web, Quantum computing, 상대성 이론, 천문학, <del>고수익 사업</del>에 관심

**:email: eunhackjang@gmail.com**

<coder /> 