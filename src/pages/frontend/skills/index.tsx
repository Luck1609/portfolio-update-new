import Container from '@/components/container'
import { Tabs } from './tabs'

export default function Skills() {
  return (
    <div>
      <Container className="mt-20">
        <Tabs
          tabs={[
            {
              title: 'Design',
              value: 'design',
              content: <div className="h-[600px] bg-rose-500">Design component here</div>
            },
            {
              title: 'Languages & Frameworks',
              value: 'frameworks',
              content: <div className="h-[600px] bg-rose-500">Language and frameworks component here</div>
            }
          ]}
        />
      </Container>
    </div>
  )
}
