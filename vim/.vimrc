set nocompatible        " Must be first line

autocmd FileType vim setlocal foldmethod=marker
let g:platform = {'mac':0,'unix':0,'cygwin':0,'windows':0}
" Environment {{{
    
    if has('unix')
        if has('win32unix')
            let g:platform['cygwin'] = 1
        elseif has('macunix')
            let g:platform['mac'] = 1
        else
            let g:platform['unix'] = 1
        endif
    else
        let g:platform['windows'] = 1
    endif
    
    if has('gui_running')
        let g:has_gui_running = 1
    else
        let g:has_gui_running = 0
    endif 

    " Basics {{{
        if !g:platform['windows']
            set shell=/bin/sh
        endif
    " }}}

    " Windows Compatible {{{
        " On Windows, also use '.vim' instead of 'vimfiles'; this makes synchronization
        " across (heterogeneous) systems easier.
        if g:platform['windows']
          set runtimepath=$HOME/.vim,$VIM/vimfiles,$VIMRUNTIME,$VIM/vimfiles/after,$HOME/.vim/after
        endif
    " }}}
    
    " Arrow Key Fix {{{
        " https://github.com/spf13/spf13-vim/issues/780
        if &term[:4] == "xterm" || &term[:5] == 'screen' || &term[:3] == 'rxvt'
            inoremap <silent> <C-[>OC <RIGHT>
        endif
    " }}}
    
" }}}

" Use before config if available {{{
    if filereadable(expand("~/.vim/.vimrc.local"))
        source ~/.vim/.vimrc.local
    endif
" }}}

" Use bundles config {{{
    if filereadable(expand("~/.vim/.vimrc.bundles"))
        source ~/.vim/.vimrc.bundles
    endif
" }}}