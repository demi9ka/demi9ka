import { imageModalStore } from '@/store/image-modal-store'
import { Modal } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { Image } from '../image'

export const FullImageModal = observer(() => {
  const { imageUrl, opened: openedStore, setOpened } = imageModalStore

  const onClose = () => {
    setOpened(false)
  }
  const opened = openedStore && Boolean(imageUrl)
  return (
    <Modal centered p={0} size={'xl'} onClose={onClose} opened={opened}>
      <Image src={imageUrl} />
    </Modal>
  )
})
