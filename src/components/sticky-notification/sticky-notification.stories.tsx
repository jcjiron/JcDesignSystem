import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
    StickyNotificationProps,
    StickyNotification,
} from './sticky-notification'
import { Navbar } from '../navbar'
import { Icon } from '../icon'

export default {
    title: 'Example/Sticky Notification',
    component: StickyNotification,
} as Meta

const Template: Story<StickyNotificationProps> = ({
    children,
    ...args
}: StickyNotificationProps) => (
    <>
        <Navbar
            brand={
                <a className="navbar-brand" href="#">
                    <Icon variant="icon-casai-logo-white" />
                </a>
            }
            variant="light"
            MobileMenu={<></>}
        ></Navbar>
        <StickyNotification {...args}>{children}</StickyNotification>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at diam euismod, tristique ligula id, pellentesque
                        dolor. Proin pellentesque scelerisque felis, sed luctus
                        nibh suscipit placerat. Ut sed dolor magna. Donec
                        eleifend venenatis eros nec molestie. Cras sed dictum
                        ipsum, quis bibendum mi. Pellentesque volutpat sapien
                        nunc, nec viverra justo dapibus sit amet. Duis ac
                        pharetra sapien. Nunc sed cursus arcu, ac aliquam nibh.
                        Vestibulum fermentum, risus in scelerisque bibendum, sem
                        nunc tincidunt lectus, id bibendum magna arcu eu lacus.
                        Aliquam id sem facilisis nulla aliquam aliquam non id
                        nibh. Sed vel massa sed ex finibus mollis. Donec
                        condimentum vestibulum porttitor. Fusce eget gravida
                        magna, eget pulvinar ex. Integer auctor nulla
                        pellentesque urna varius venenatis nec eu quam. Morbi
                        porta urna vel nisi pulvinar tempus. Ut vel lectus sed
                        tortor eleifend consequat. Vivamus vestibulum sodales
                        turpis vitae tincidunt. Vestibulum eget erat vel purus
                        imperdiet convallis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis egestas condimentum feugiat. Proin quis
                        vulputate dui. Donec congue augue ipsum, et condimentum
                        nulla efficitur sollicitudin. Cras vehicula, ante a
                        vestibulum mollis, sem orci pellentesque lectus, in
                        convallis justo eros nec est. Phasellus volutpat at
                        nulla et mollis. Praesent ultrices facilisis lorem.
                        Donec nec consectetur erat. Vivamus euismod nisi metus,
                        a commodo nisl accumsan id. Ut mattis erat eget nulla
                        ornare varius. Aliquam erat volutpat. Donec vitae libero
                        sed mauris tempus dictum. Proin ut blandit lacus, in
                        tempus nisl. In lacinia sit amet mi eu blandit. Fusce
                        ornare, nisi eu semper scelerisque, nibh eros iaculis
                        odio, a posuere libero lorem non felis. Suspendisse
                        elementum diam felis. Morbi quis ullamcorper neque.
                        Maecenas at porttitor enim. Duis nibh nulla, viverra sit
                        amet enim sed, malesuada tincidunt ex. Integer placerat
                        fringilla gravida. Nullam ac est at dolor volutpat
                        ornare. Vivamus lobortis eget libero vel tincidunt.
                        Fusce lobortis tortor tellus, at egestas libero congue
                        a. Nulla sed facilisis lacus, sit amet tristique velit.
                        Nulla cursus condimentum quam suscipit condimentum. Sed
                        cursus erat mi, id fermentum nulla venenatis vel.
                        Aliquam posuere commodo velit, vel faucibus dolor
                        gravida vulputate. Phasellus fringilla luctus auctor.
                        Donec congue nisl vel arcu convallis volutpat et in
                        metus. Sed venenatis commodo dignissim. Curabitur eget
                        ante interdum tellus euismod facilisis. Nulla facilisi.
                        In faucibus sem auctor, molestie nibh nec, pharetra
                        dolor. Donec non nisi massa. Sed sollicitudin feugiat
                        risus non volutpat. Suspendisse vehicula semper elit,
                        nec consequat purus dictum sit amet. Integer tincidunt
                        sapien iaculis est dictum, nec scelerisque risus
                        sodales. Nunc vel nulla eu nulla rhoncus cursus sed in
                        ante. Praesent lacinia congue tellus. Curabitur porta
                        rhoncus risus, eu malesuada erat placerat fringilla.
                        Mauris ac dictum enim. Donec porttitor blandit sem,
                        vitae dignissim felis. Phasellus interdum nisi ac sem
                        congue volutpat. Maecenas at odio ligula. Donec egestas
                        pharetra porta. Cras tempor ut ligula nec faucibus.
                        Etiam turpis urna, tempus eget eros quis, bibendum
                        ultricies tortor. Fusce pretium euismod tortor, eu
                        dapibus dolor. In pretium, mauris sed viverra posuere,
                        sem nisl scelerisque arcu, elementum ullamcorper massa
                        quam facilisis quam. Vestibulum venenatis a nibh ut
                        lobortis. Phasellus luctus interdum justo sed eleifend.
                        Aliquam lobortis elit ut pulvinar lobortis. Vivamus
                        tellus arcu, vehicula id bibendum id, facilisis ut
                        ipsum. Integer porttitor ipsum non semper feugiat. Cras
                        ante nisl, molestie ac sapien ut, finibus dapibus ipsum.
                        Mauris dictum leo nec nisl mollis, hendrerit ornare
                        purus aliquam. Sed in tellus eget metus tempor molestie
                        non in odio. Sed condimentum tristique molestie. Ut at
                        purus et nulla pulvinar ullamcorper. Ut ullamcorper eu
                        ipsum et porttitor. Curabitur varius dapibus velit, ut
                        placerat nulla pretium eget. Nam congue erat sem, eget
                        hendrerit libero interdum euismod. Fusce vulputate est
                        et nibh faucibus, et cursus nulla porttitor. Sed
                        vulputate sem nec justo laoreet laoreet. Aenean ut
                        euismod libero, vitae iaculis turpis. Morbi suscipit
                        facilisis luctus. In gravida semper leo sit amet
                        tincidunt. Sed interdum gravida nulla, sagittis
                        venenatis justo rutrum nec. Integer mattis sapien et
                        tortor malesuada, sit amet accumsan ex facilisis.
                        Integer ac tincidunt sem, eu tristique urna. Curabitur
                        finibus nunc quis tortor blandit sollicitudin. Cras
                        congue ullamcorper turpis, eleifend congue magna lacinia
                        non. Suspendisse potenti. Donec nibh ipsum, tristique eu
                        turpis nec, ornare ultrices odio. Morbi tincidunt felis
                        a erat euismod vehicula. Mauris quis rhoncus orci.
                        Praesent cursus dolor in fermentum aliquet. Sed a
                        porttitor felis, egestas ultricies ligula. Fusce
                        interdum dapibus augue sit amet dictum. Vestibulum eu
                        erat ullamcorper, dictum erat ac, molestie nibh. In non
                        turpis purus. Aliquam ut ante metus. Curabitur at erat
                        ut mauris interdum iaculis nec ut quam. Curabitur ut
                        libero venenatis, blandit arcu eget, congue enim. Etiam
                        vitae neque egestas, consequat libero sit amet,
                        vulputate odio. Etiam volutpat scelerisque diam sit amet
                        auctor. Quisque eu iaculis lorem. Donec sit amet
                        volutpat velit, vitae vestibulum est. Cras orci ex,
                        molestie ac rhoncus in, elementum ut nisi. Vestibulum
                        fermentum velit eu nisi blandit varius. Curabitur quis
                        justo ipsum. Nullam sit amet sodales tellus. Proin
                        laoreet dapibus ante at ornare. Proin consequat orci
                        lorem, sed cursus tellus cursus id. Donec tempus sapien
                        et suscipit dapibus. Suspendisse sit amet accumsan nisi.
                        Aliquam volutpat ante id lectus dignissim sodales. Sed
                        at erat posuere, molestie arcu in, volutpat neque. Etiam
                        eget diam maximus odio feugiat feugiat. Aliquam orci
                        elit, venenatis vel mauris cursus, rhoncus pulvinar mi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at diam euismod, tristique ligula id, pellentesque
                        dolor. Proin pellentesque scelerisque felis, sed luctus
                        nibh suscipit placerat. Ut sed dolor magna. Donec
                        eleifend venenatis eros nec molestie. Cras sed dictum
                        ipsum, quis bibendum mi. Pellentesque volutpat sapien
                        nunc, nec viverra justo dapibus sit amet. Duis ac
                        pharetra sapien. Nunc sed cursus arcu, ac aliquam nibh.
                        Vestibulum fermentum, risus in scelerisque bibendum, sem
                        nunc tincidunt lectus, id bibendum magna arcu eu lacus.
                        Aliquam id sem facilisis nulla aliquam aliquam non id
                        nibh. Sed vel massa sed ex finibus mollis. Donec
                        condimentum vestibulum porttitor. Fusce eget gravida
                        magna, eget pulvinar ex. Integer auctor nulla
                        pellentesque urna varius venenatis nec eu quam. Morbi
                        porta urna vel nisi pulvinar tempus. Ut vel lectus sed
                        tortor eleifend consequat. Vivamus vestibulum sodales
                        turpis vitae tincidunt. Vestibulum eget erat vel purus
                        imperdiet convallis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis egestas condimentum feugiat. Proin quis
                        vulputate dui. Donec congue augue ipsum, et condimentum
                        nulla efficitur sollicitudin. Cras vehicula, ante a
                        vestibulum mollis, sem orci pellentesque lectus, in
                        convallis justo eros nec est. Phasellus volutpat at
                        nulla et mollis. Praesent ultrices facilisis lorem.
                        Donec nec consectetur erat. Vivamus euismod nisi metus,
                        a commodo nisl accumsan id. Ut mattis erat eget nulla
                        ornare varius. Aliquam erat volutpat. Donec vitae libero
                        sed mauris tempus dictum. Proin ut blandit lacus, in
                        tempus nisl. In lacinia sit amet mi eu blandit. Fusce
                        ornare, nisi eu semper scelerisque, nibh eros iaculis
                        odio, a posuere libero lorem non felis. Suspendisse
                        elementum diam felis. Morbi quis ullamcorper neque.
                        Maecenas at porttitor enim. Duis nibh nulla, viverra sit
                        amet enim sed, malesuada tincidunt ex. Integer placerat
                        fringilla gravida. Nullam ac est at dolor volutpat
                        ornare. Vivamus lobortis eget libero vel tincidunt.
                        Fusce lobortis tortor tellus, at egestas libero congue
                        a. Nulla sed facilisis lacus, sit amet tristique velit.
                        Nulla cursus condimentum quam suscipit condimentum. Sed
                        cursus erat mi, id fermentum nulla venenatis vel.
                        Aliquam posuere commodo velit, vel faucibus dolor
                        gravida vulputate. Phasellus fringilla luctus auctor.
                        Donec congue nisl vel arcu convallis volutpat et in
                        metus. Sed venenatis commodo dignissim. Curabitur eget
                        ante interdum tellus euismod facilisis. Nulla facilisi.
                        In faucibus sem auctor, molestie nibh nec, pharetra
                        dolor. Donec non nisi massa. Sed sollicitudin feugiat
                        risus non volutpat. Suspendisse vehicula semper elit,
                        nec consequat purus dictum sit amet. Integer tincidunt
                        sapien iaculis est dictum, nec scelerisque risus
                        sodales. Nunc vel nulla eu nulla rhoncus cursus sed in
                        ante. Praesent lacinia congue tellus. Curabitur porta
                        rhoncus risus, eu malesuada erat placerat fringilla.
                        Mauris ac dictum enim. Donec porttitor blandit sem,
                        vitae dignissim felis. Phasellus interdum nisi ac sem
                        congue volutpat. Maecenas at odio ligula. Donec egestas
                        pharetra porta. Cras tempor ut ligula nec faucibus.
                        Etiam turpis urna, tempus eget eros quis, bibendum
                        ultricies tortor. Fusce pretium euismod tortor, eu
                        dapibus dolor. In pretium, mauris sed viverra posuere,
                        sem nisl scelerisque arcu, elementum ullamcorper massa
                        quam facilisis quam. Vestibulum venenatis a nibh ut
                        lobortis. Phasellus luctus interdum justo sed eleifend.
                        Aliquam lobortis elit ut pulvinar lobortis. Vivamus
                        tellus arcu, vehicula id bibendum id, facilisis ut
                        ipsum. Integer porttitor ipsum non semper feugiat. Cras
                        ante nisl, molestie ac sapien ut, finibus dapibus ipsum.
                        Mauris dictum leo nec nisl mollis, hendrerit ornare
                        purus aliquam. Sed in tellus eget metus tempor molestie
                        non in odio. Sed condimentum tristique molestie. Ut at
                        purus et nulla pulvinar ullamcorper. Ut ullamcorper eu
                        ipsum et porttitor. Curabitur varius dapibus velit, ut
                        placerat nulla pretium eget. Nam congue erat sem, eget
                        hendrerit libero interdum euismod. Fusce vulputate est
                        et nibh faucibus, et cursus nulla porttitor. Sed
                        vulputate sem nec justo laoreet laoreet. Aenean ut
                        euismod libero, vitae iaculis turpis. Morbi suscipit
                        facilisis luctus. In gravida semper leo sit amet
                        tincidunt. Sed interdum gravida nulla, sagittis
                        venenatis justo rutrum nec. Integer mattis sapien et
                        tortor malesuada, sit amet accumsan ex facilisis.
                        Integer ac tincidunt sem, eu tristique urna. Curabitur
                        finibus nunc quis tortor blandit sollicitudin. Cras
                        congue ullamcorper turpis, eleifend congue magna lacinia
                        non. Suspendisse potenti. Donec nibh ipsum, tristique eu
                        turpis nec, ornare ultrices odio. Morbi tincidunt felis
                        a erat euismod vehicula. Mauris quis rhoncus orci.
                        Praesent cursus dolor in fermentum aliquet. Sed a
                        porttitor felis, egestas ultricies ligula. Fusce
                        interdum dapibus augue sit amet dictum. Vestibulum eu
                        erat ullamcorper, dictum erat ac, molestie nibh. In non
                        turpis purus. Aliquam ut ante metus. Curabitur at erat
                        ut mauris interdum iaculis nec ut quam. Curabitur ut
                        libero venenatis, blandit arcu eget, congue enim. Etiam
                        vitae neque egestas, consequat libero sit amet,
                        vulputate odio. Etiam volutpat scelerisque diam sit amet
                        auctor. Quisque eu iaculis lorem. Donec sit amet
                        volutpat velit, vitae vestibulum est. Cras orci ex,
                        molestie ac rhoncus in, elementum ut nisi. Vestibulum
                        fermentum velit eu nisi blandit varius. Curabitur quis
                        justo ipsum. Nullam sit amet sodales tellus. Proin
                        laoreet dapibus ante at ornare. Proin consequat orci
                        lorem, sed cursus tellus cursus id. Donec tempus sapien
                        et suscipit dapibus. Suspendisse sit amet accumsan nisi.
                        Aliquam volutpat ante id lectus dignissim sodales. Sed
                        at erat posuere, molestie arcu in, volutpat neque. Etiam
                        eget diam maximus odio feugiat feugiat. Aliquam orci
                        elit, venenatis vel mauris cursus, rhoncus pulvinar mi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at diam euismod, tristique ligula id, pellentesque
                        dolor. Proin pellentesque scelerisque felis, sed luctus
                        nibh suscipit placerat. Ut sed dolor magna. Donec
                        eleifend venenatis eros nec molestie. Cras sed dictum
                        ipsum, quis bibendum mi. Pellentesque volutpat sapien
                        nunc, nec viverra justo dapibus sit amet. Duis ac
                        pharetra sapien. Nunc sed cursus arcu, ac aliquam nibh.
                        Vestibulum fermentum, risus in scelerisque bibendum, sem
                        nunc tincidunt lectus, id bibendum magna arcu eu lacus.
                        Aliquam id sem facilisis nulla aliquam aliquam non id
                        nibh. Sed vel massa sed ex finibus mollis. Donec
                        condimentum vestibulum porttitor. Fusce eget gravida
                        magna, eget pulvinar ex. Integer auctor nulla
                        pellentesque urna varius venenatis nec eu quam. Morbi
                        porta urna vel nisi pulvinar tempus. Ut vel lectus sed
                        tortor eleifend consequat. Vivamus vestibulum sodales
                        turpis vitae tincidunt. Vestibulum eget erat vel purus
                        imperdiet convallis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis egestas condimentum feugiat. Proin quis
                        vulputate dui. Donec congue augue ipsum, et condimentum
                        nulla efficitur sollicitudin. Cras vehicula, ante a
                        vestibulum mollis, sem orci pellentesque lectus, in
                        convallis justo eros nec est. Phasellus volutpat at
                        nulla et mollis. Praesent ultrices facilisis lorem.
                        Donec nec consectetur erat. Vivamus euismod nisi metus,
                        a commodo nisl accumsan id. Ut mattis erat eget nulla
                        ornare varius. Aliquam erat volutpat. Donec vitae libero
                        sed mauris tempus dictum. Proin ut blandit lacus, in
                        tempus nisl. In lacinia sit amet mi eu blandit. Fusce
                        ornare, nisi eu semper scelerisque, nibh eros iaculis
                        odio, a posuere libero lorem non felis. Suspendisse
                        elementum diam felis. Morbi quis ullamcorper neque.
                        Maecenas at porttitor enim. Duis nibh nulla, viverra sit
                        amet enim sed, malesuada tincidunt ex. Integer placerat
                        fringilla gravida. Nullam ac est at dolor volutpat
                        ornare. Vivamus lobortis eget libero vel tincidunt.
                        Fusce lobortis tortor tellus, at egestas libero congue
                        a. Nulla sed facilisis lacus, sit amet tristique velit.
                        Nulla cursus condimentum quam suscipit condimentum. Sed
                        cursus erat mi, id fermentum nulla venenatis vel.
                        Aliquam posuere commodo velit, vel faucibus dolor
                        gravida vulputate. Phasellus fringilla luctus auctor.
                        Donec congue nisl vel arcu convallis volutpat et in
                        metus. Sed venenatis commodo dignissim. Curabitur eget
                        ante interdum tellus euismod facilisis. Nulla facilisi.
                        In faucibus sem auctor, molestie nibh nec, pharetra
                        dolor. Donec non nisi massa. Sed sollicitudin feugiat
                        risus non volutpat. Suspendisse vehicula semper elit,
                        nec consequat purus dictum sit amet. Integer tincidunt
                        sapien iaculis est dictum, nec scelerisque risus
                        sodales. Nunc vel nulla eu nulla rhoncus cursus sed in
                        ante. Praesent lacinia congue tellus. Curabitur porta
                        rhoncus risus, eu malesuada erat placerat fringilla.
                        Mauris ac dictum enim. Donec porttitor blandit sem,
                        vitae dignissim felis. Phasellus interdum nisi ac sem
                        congue volutpat. Maecenas at odio ligula. Donec egestas
                        pharetra porta. Cras tempor ut ligula nec faucibus.
                        Etiam turpis urna, tempus eget eros quis, bibendum
                        ultricies tortor. Fusce pretium euismod tortor, eu
                        dapibus dolor. In pretium, mauris sed viverra posuere,
                        sem nisl scelerisque arcu, elementum ullamcorper massa
                        quam facilisis quam. Vestibulum venenatis a nibh ut
                        lobortis. Phasellus luctus interdum justo sed eleifend.
                        Aliquam lobortis elit ut pulvinar lobortis. Vivamus
                        tellus arcu, vehicula id bibendum id, facilisis ut
                        ipsum. Integer porttitor ipsum non semper feugiat. Cras
                        ante nisl, molestie ac sapien ut, finibus dapibus ipsum.
                        Mauris dictum leo nec nisl mollis, hendrerit ornare
                        purus aliquam. Sed in tellus eget metus tempor molestie
                        non in odio. Sed condimentum tristique molestie. Ut at
                        purus et nulla pulvinar ullamcorper. Ut ullamcorper eu
                        ipsum et porttitor. Curabitur varius dapibus velit, ut
                        placerat nulla pretium eget. Nam congue erat sem, eget
                        hendrerit libero interdum euismod. Fusce vulputate est
                        et nibh faucibus, et cursus nulla porttitor. Sed
                        vulputate sem nec justo laoreet laoreet. Aenean ut
                        euismod libero, vitae iaculis turpis. Morbi suscipit
                        facilisis luctus. In gravida semper leo sit amet
                        tincidunt. Sed interdum gravida nulla, sagittis
                        venenatis justo rutrum nec. Integer mattis sapien et
                        tortor malesuada, sit amet accumsan ex facilisis.
                        Integer ac tincidunt sem, eu tristique urna. Curabitur
                        finibus nunc quis tortor blandit sollicitudin. Cras
                        congue ullamcorper turpis, eleifend congue magna lacinia
                        non. Suspendisse potenti. Donec nibh ipsum, tristique eu
                        turpis nec, ornare ultrices odio. Morbi tincidunt felis
                        a erat euismod vehicula. Mauris quis rhoncus orci.
                        Praesent cursus dolor in fermentum aliquet. Sed a
                        porttitor felis, egestas ultricies ligula. Fusce
                        interdum dapibus augue sit amet dictum. Vestibulum eu
                        erat ullamcorper, dictum erat ac, molestie nibh. In non
                        turpis purus. Aliquam ut ante metus. Curabitur at erat
                        ut mauris interdum iaculis nec ut quam. Curabitur ut
                        libero venenatis, blandit arcu eget, congue enim. Etiam
                        vitae neque egestas, consequat libero sit amet,
                        vulputate odio. Etiam volutpat scelerisque diam sit amet
                        auctor. Quisque eu iaculis lorem. Donec sit amet
                        volutpat velit, vitae vestibulum est. Cras orci ex,
                        molestie ac rhoncus in, elementum ut nisi. Vestibulum
                        fermentum velit eu nisi blandit varius. Curabitur quis
                        justo ipsum. Nullam sit amet sodales tellus. Proin
                        laoreet dapibus ante at ornare. Proin consequat orci
                        lorem, sed cursus tellus cursus id. Donec tempus sapien
                        et suscipit dapibus. Suspendisse sit amet accumsan nisi.
                        Aliquam volutpat ante id lectus dignissim sodales. Sed
                        at erat posuere, molestie arcu in, volutpat neque. Etiam
                        eget diam maximus odio feugiat feugiat. Aliquam orci
                        elit, venenatis vel mauris cursus, rhoncus pulvinar mi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at diam euismod, tristique ligula id, pellentesque
                        dolor. Proin pellentesque scelerisque felis, sed luctus
                        nibh suscipit placerat. Ut sed dolor magna. Donec
                        eleifend venenatis eros nec molestie. Cras sed dictum
                        ipsum, quis bibendum mi. Pellentesque volutpat sapien
                        nunc, nec viverra justo dapibus sit amet. Duis ac
                        pharetra sapien. Nunc sed cursus arcu, ac aliquam nibh.
                        Vestibulum fermentum, risus in scelerisque bibendum, sem
                        nunc tincidunt lectus, id bibendum magna arcu eu lacus.
                        Aliquam id sem facilisis nulla aliquam aliquam non id
                        nibh. Sed vel massa sed ex finibus mollis. Donec
                        condimentum vestibulum porttitor. Fusce eget gravida
                        magna, eget pulvinar ex. Integer auctor nulla
                        pellentesque urna varius venenatis nec eu quam. Morbi
                        porta urna vel nisi pulvinar tempus. Ut vel lectus sed
                        tortor eleifend consequat. Vivamus vestibulum sodales
                        turpis vitae tincidunt. Vestibulum eget erat vel purus
                        imperdiet convallis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis egestas condimentum feugiat. Proin quis
                        vulputate dui. Donec congue augue ipsum, et condimentum
                        nulla efficitur sollicitudin. Cras vehicula, ante a
                        vestibulum mollis, sem orci pellentesque lectus, in
                        convallis justo eros nec est. Phasellus volutpat at
                        nulla et mollis. Praesent ultrices facilisis lorem.
                        Donec nec consectetur erat. Vivamus euismod nisi metus,
                        a commodo nisl accumsan id. Ut mattis erat eget nulla
                        ornare varius. Aliquam erat volutpat. Donec vitae libero
                        sed mauris tempus dictum. Proin ut blandit lacus, in
                        tempus nisl. In lacinia sit amet mi eu blandit. Fusce
                        ornare, nisi eu semper scelerisque, nibh eros iaculis
                        odio, a posuere libero lorem non felis. Suspendisse
                        elementum diam felis. Morbi quis ullamcorper neque.
                        Maecenas at porttitor enim. Duis nibh nulla, viverra sit
                        amet enim sed, malesuada tincidunt ex. Integer placerat
                        fringilla gravida. Nullam ac est at dolor volutpat
                        ornare. Vivamus lobortis eget libero vel tincidunt.
                        Fusce lobortis tortor tellus, at egestas libero congue
                        a. Nulla sed facilisis lacus, sit amet tristique velit.
                        Nulla cursus condimentum quam suscipit condimentum. Sed
                        cursus erat mi, id fermentum nulla venenatis vel.
                        Aliquam posuere commodo velit, vel faucibus dolor
                        gravida vulputate. Phasellus fringilla luctus auctor.
                        Donec congue nisl vel arcu convallis volutpat et in
                        metus. Sed venenatis commodo dignissim. Curabitur eget
                        ante interdum tellus euismod facilisis. Nulla facilisi.
                        In faucibus sem auctor, molestie nibh nec, pharetra
                        dolor. Donec non nisi massa. Sed sollicitudin feugiat
                        risus non volutpat. Suspendisse vehicula semper elit,
                        nec consequat purus dictum sit amet. Integer tincidunt
                        sapien iaculis est dictum, nec scelerisque risus
                        sodales. Nunc vel nulla eu nulla rhoncus cursus sed in
                        ante. Praesent lacinia congue tellus. Curabitur porta
                        rhoncus risus, eu malesuada erat placerat fringilla.
                        Mauris ac dictum enim. Donec porttitor blandit sem,
                        vitae dignissim felis. Phasellus interdum nisi ac sem
                        congue volutpat. Maecenas at odio ligula. Donec egestas
                        pharetra porta. Cras tempor ut ligula nec faucibus.
                        Etiam turpis urna, tempus eget eros quis, bibendum
                        ultricies tortor. Fusce pretium euismod tortor, eu
                        dapibus dolor. In pretium, mauris sed viverra posuere,
                        sem nisl scelerisque arcu, elementum ullamcorper massa
                        quam facilisis quam. Vestibulum venenatis a nibh ut
                        lobortis. Phasellus luctus interdum justo sed eleifend.
                        Aliquam lobortis elit ut pulvinar lobortis. Vivamus
                        tellus arcu, vehicula id bibendum id, facilisis ut
                        ipsum. Integer porttitor ipsum non semper feugiat. Cras
                        ante nisl, molestie ac sapien ut, finibus dapibus ipsum.
                        Mauris dictum leo nec nisl mollis, hendrerit ornare
                        purus aliquam. Sed in tellus eget metus tempor molestie
                        non in odio. Sed condimentum tristique molestie. Ut at
                        purus et nulla pulvinar ullamcorper. Ut ullamcorper eu
                        ipsum et porttitor. Curabitur varius dapibus velit, ut
                        placerat nulla pretium eget. Nam congue erat sem, eget
                        hendrerit libero interdum euismod. Fusce vulputate est
                        et nibh faucibus, et cursus nulla porttitor. Sed
                        vulputate sem nec justo laoreet laoreet. Aenean ut
                        euismod libero, vitae iaculis turpis. Morbi suscipit
                        facilisis luctus. In gravida semper leo sit amet
                        tincidunt. Sed interdum gravida nulla, sagittis
                        venenatis justo rutrum nec. Integer mattis sapien et
                        tortor malesuada, sit amet accumsan ex facilisis.
                        Integer ac tincidunt sem, eu tristique urna. Curabitur
                        finibus nunc quis tortor blandit sollicitudin. Cras
                        congue ullamcorper turpis, eleifend congue magna lacinia
                        non. Suspendisse potenti. Donec nibh ipsum, tristique eu
                        turpis nec, ornare ultrices odio. Morbi tincidunt felis
                        a erat euismod vehicula. Mauris quis rhoncus orci.
                        Praesent cursus dolor in fermentum aliquet. Sed a
                        porttitor felis, egestas ultricies ligula. Fusce
                        interdum dapibus augue sit amet dictum. Vestibulum eu
                        erat ullamcorper, dictum erat ac, molestie nibh. In non
                        turpis purus. Aliquam ut ante metus. Curabitur at erat
                        ut mauris interdum iaculis nec ut quam. Curabitur ut
                        libero venenatis, blandit arcu eget, congue enim. Etiam
                        vitae neque egestas, consequat libero sit amet,
                        vulputate odio. Etiam volutpat scelerisque diam sit amet
                        auctor. Quisque eu iaculis lorem. Donec sit amet
                        volutpat velit, vitae vestibulum est. Cras orci ex,
                        molestie ac rhoncus in, elementum ut nisi. Vestibulum
                        fermentum velit eu nisi blandit varius. Curabitur quis
                        justo ipsum. Nullam sit amet sodales tellus. Proin
                        laoreet dapibus ante at ornare. Proin consequat orci
                        lorem, sed cursus tellus cursus id. Donec tempus sapien
                        et suscipit dapibus. Suspendisse sit amet accumsan nisi.
                        Aliquam volutpat ante id lectus dignissim sodales. Sed
                        at erat posuere, molestie arcu in, volutpat neque. Etiam
                        eget diam maximus odio feugiat feugiat. Aliquam orci
                        elit, venenatis vel mauris cursus, rhoncus pulvinar mi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis at diam euismod, tristique ligula id, pellentesque
                        dolor. Proin pellentesque scelerisque felis, sed luctus
                        nibh suscipit placerat. Ut sed dolor magna. Donec
                        eleifend venenatis eros nec molestie. Cras sed dictum
                        ipsum, quis bibendum mi. Pellentesque volutpat sapien
                        nunc, nec viverra justo dapibus sit amet. Duis ac
                        pharetra sapien. Nunc sed cursus arcu, ac aliquam nibh.
                        Vestibulum fermentum, risus in scelerisque bibendum, sem
                        nunc tincidunt lectus, id bibendum magna arcu eu lacus.
                        Aliquam id sem facilisis nulla aliquam aliquam non id
                        nibh. Sed vel massa sed ex finibus mollis. Donec
                        condimentum vestibulum porttitor. Fusce eget gravida
                        magna, eget pulvinar ex. Integer auctor nulla
                        pellentesque urna varius venenatis nec eu quam. Morbi
                        porta urna vel nisi pulvinar tempus. Ut vel lectus sed
                        tortor eleifend consequat. Vivamus vestibulum sodales
                        turpis vitae tincidunt. Vestibulum eget erat vel purus
                        imperdiet convallis. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Duis egestas condimentum feugiat. Proin quis
                        vulputate dui. Donec congue augue ipsum, et condimentum
                        nulla efficitur sollicitudin. Cras vehicula, ante a
                        vestibulum mollis, sem orci pellentesque lectus, in
                        convallis justo eros nec est. Phasellus volutpat at
                        nulla et mollis. Praesent ultrices facilisis lorem.
                        Donec nec consectetur erat. Vivamus euismod nisi metus,
                        a commodo nisl accumsan id. Ut mattis erat eget nulla
                        ornare varius. Aliquam erat volutpat. Donec vitae libero
                        sed mauris tempus dictum. Proin ut blandit lacus, in
                        tempus nisl. In lacinia sit amet mi eu blandit. Fusce
                        ornare, nisi eu semper scelerisque, nibh eros iaculis
                        odio, a posuere libero lorem non felis. Suspendisse
                        elementum diam felis. Morbi quis ullamcorper neque.
                        Maecenas at porttitor enim. Duis nibh nulla, viverra sit
                        amet enim sed, malesuada tincidunt ex. Integer placerat
                        fringilla gravida. Nullam ac est at dolor volutpat
                        ornare. Vivamus lobortis eget libero vel tincidunt.
                        Fusce lobortis tortor tellus, at egestas libero congue
                        a. Nulla sed facilisis lacus, sit amet tristique velit.
                        Nulla cursus condimentum quam suscipit condimentum. Sed
                        cursus erat mi, id fermentum nulla venenatis vel.
                        Aliquam posuere commodo velit, vel faucibus dolor
                        gravida vulputate. Phasellus fringilla luctus auctor.
                        Donec congue nisl vel arcu convallis volutpat et in
                        metus. Sed venenatis commodo dignissim. Curabitur eget
                        ante interdum tellus euismod facilisis. Nulla facilisi.
                        In faucibus sem auctor, molestie nibh nec, pharetra
                        dolor. Donec non nisi massa. Sed sollicitudin feugiat
                        risus non volutpat. Suspendisse vehicula semper elit,
                        nec consequat purus dictum sit amet. Integer tincidunt
                        sapien iaculis est dictum, nec scelerisque risus
                        sodales. Nunc vel nulla eu nulla rhoncus cursus sed in
                        ante. Praesent lacinia congue tellus. Curabitur porta
                        rhoncus risus, eu malesuada erat placerat fringilla.
                        Mauris ac dictum enim. Donec porttitor blandit sem,
                        vitae dignissim felis. Phasellus interdum nisi ac sem
                        congue volutpat. Maecenas at odio ligula. Donec egestas
                        pharetra porta. Cras tempor ut ligula nec faucibus.
                        Etiam turpis urna, tempus eget eros quis, bibendum
                        ultricies tortor. Fusce pretium euismod tortor, eu
                        dapibus dolor. In pretium, mauris sed viverra posuere,
                        sem nisl scelerisque arcu, elementum ullamcorper massa
                        quam facilisis quam. Vestibulum venenatis a nibh ut
                        lobortis. Phasellus luctus interdum justo sed eleifend.
                        Aliquam lobortis elit ut pulvinar lobortis. Vivamus
                        tellus arcu, vehicula id bibendum id, facilisis ut
                        ipsum. Integer porttitor ipsum non semper feugiat. Cras
                        ante nisl, molestie ac sapien ut, finibus dapibus ipsum.
                        Mauris dictum leo nec nisl mollis, hendrerit ornare
                        purus aliquam. Sed in tellus eget metus tempor molestie
                        non in odio. Sed condimentum tristique molestie. Ut at
                        purus et nulla pulvinar ullamcorper. Ut ullamcorper eu
                        ipsum et porttitor. Curabitur varius dapibus velit, ut
                        placerat nulla pretium eget. Nam congue erat sem, eget
                        hendrerit libero interdum euismod. Fusce vulputate est
                        et nibh faucibus, et cursus nulla porttitor. Sed
                        vulputate sem nec justo laoreet laoreet. Aenean ut
                        euismod libero, vitae iaculis turpis. Morbi suscipit
                        facilisis luctus. In gravida semper leo sit amet
                        tincidunt. Sed interdum gravida nulla, sagittis
                        venenatis justo rutrum nec. Integer mattis sapien et
                        tortor malesuada, sit amet accumsan ex facilisis.
                        Integer ac tincidunt sem, eu tristique urna. Curabitur
                        finibus nunc quis tortor blandit sollicitudin. Cras
                        congue ullamcorper turpis, eleifend congue magna lacinia
                        non. Suspendisse potenti. Donec nibh ipsum, tristique eu
                        turpis nec, ornare ultrices odio. Morbi tincidunt felis
                        a erat euismod vehicula. Mauris quis rhoncus orci.
                        Praesent cursus dolor in fermentum aliquet. Sed a
                        porttitor felis, egestas ultricies ligula. Fusce
                        interdum dapibus augue sit amet dictum. Vestibulum eu
                        erat ullamcorper, dictum erat ac, molestie nibh. In non
                        turpis purus. Aliquam ut ante metus. Curabitur at erat
                        ut mauris interdum iaculis nec ut quam. Curabitur ut
                        libero venenatis, blandit arcu eget, congue enim. Etiam
                        vitae neque egestas, consequat libero sit amet,
                        vulputate odio. Etiam volutpat scelerisque diam sit amet
                        auctor. Quisque eu iaculis lorem. Donec sit amet
                        volutpat velit, vitae vestibulum est. Cras orci ex,
                        molestie ac rhoncus in, elementum ut nisi. Vestibulum
                        fermentum velit eu nisi blandit varius. Curabitur quis
                        justo ipsum. Nullam sit amet sodales tellus. Proin
                        laoreet dapibus ante at ornare. Proin consequat orci
                        lorem, sed cursus tellus cursus id. Donec tempus sapien
                        et suscipit dapibus. Suspendisse sit amet accumsan nisi.
                        Aliquam volutpat ante id lectus dignissim sodales. Sed
                        at erat posuere, molestie arcu in, volutpat neque. Etiam
                        eget diam maximus odio feugiat feugiat. Aliquam orci
                        elit, venenatis vel mauris cursus, rhoncus pulvinar mi.
                    </p>
                </div>
            </div>
        </div>
    </>
)

export const Primary = Template.bind({})
const args = {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
  diam euismod, tristique ligula id, pellentesque dolor. Proin
  pellentesque scelerisque felis, sed luctus nibh suscipit placerat.`,
    storageProvider: () => window.sessionStorage,
} as StickyNotificationProps

Primary.args = args

export const CustomBackground = Template.bind({})
CustomBackground.args = {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
  diam euismod, tristique ligula id, pellentesque dolor. Proin
  pellentesque scelerisque felis, sed luctus nibh suscipit placerat.`,
    storageProvider: () => window.sessionStorage,
    variant: 'custom',
    backgroundColor: '#000000',
}
