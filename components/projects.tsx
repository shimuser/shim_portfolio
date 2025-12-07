"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { X, Plus, Upload, ChevronDown, LayoutGrid } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"

export function Projects() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "프로젝트",
    subtitle: "프로젝트",
    initialDisplay: 6,
    loadMoreCount: 3,
    background: {"image":"","video":"","color":"","opacity":0.1},
    projects: [{"image":"/uploads/project-1765076493209-1765076501628.png","video":"","title":"딥러닝을 이용한 호텔 거래 유형 분석 프로젝트","description":" OTT에서 촉발된 한류의 수요 증가로  호황을 맞이하여 현재 크게 성장하고 있는 호텔 부동산 거래 양상에 대한 연구를 진행하였었습니다. 코로나라는 큰 변화가 있었고, 중국인 쇼핑관광에 몰려있던 관광 수요가 다양한 국적의 관광객 중심의 체험관광이 위주가 되어 그에 따른 분석을 진행하였습니다. \n 호텔 거래 내역은 잘 공개되지 않아 한국 부동산원의 오피스 거래 데이터에서 이름과 지역 지구 및 주 이용 용도를 통해 호텔 및 호스텔들의 거래 내역을 파악하고, 관광-소비-오피스 등 각 대표적인 요소들의 상관성을 딥러닝 과정에서 인식할 수 있도록 각 카테고리 별 주요 장소마다 좌표를 형성하고, 가장 가까운 카테고리 장소의 거리를 따로 입력하여 딥러닝을 진행하는 과정을 거쳤습니다.\n\n이러한 과정을 통해 정보가 부족한 자료를 구하고 필터링 하는 감각을 기를 수 있었고, 딥러닝에 필요하거나 유리한 변수들을 선정하고 가공하는 방법에 대한 감각을 기를 수 있었습니다. "},{"image":"/uploads/project-1765078410624-1765078411634.png","video":"","title":"모의 부동산 PF","description":" 모의 개발을 진행하였습니다. 당시 대형 건물의 개발 제안서는 작업을 했었습니다. \n 사업 개발성을 확보하기 서울녹지생태도심 사업을 발견하여 이를 활용한 용적률 인센티브를 바탕으로 사업성을 확보하고 개발 제안서를 작성하였습니다.\n 그 과정에서 설득력과 개발 컨셉에 대한 이해를 위해 이미지를 활용하자는 제안했지만, 마땅한 이미지를 찾지 못해 난항이 있었습니다. 때문에, 생소한 스케치업이라는 3D 툴을 방과 후에 따로 자습하여 직접 3D 모델을 만들고 부지 모야ㅇ에 맞추어, 건물의 컨셉이나 디자인을 창조하여  제안서를 작성하고 발표할 때 저희 조의 경쟁력을 갖추는 데 기여했습니다. 또한 매번 변경되는 사항마다 꾸준히 반영하여 완성도 있는 발표에 기여하였습니다.\n이를 통해 간단한 3D툴을 사용하는 능력과 상황에 필요한 추가적인 능력이 요구될 때 어떤 자세를 필요로 하는지 알 수 있었습니다."},{"image":"/uploads/project-1765082949676-1765082949734.png","video":"","title":"창업 프로젝트","description":" 건강기능식품 도/소매업 자영업을 직접 운영하여 사무직에 필요한 기본 역량을 쌓았으며 그 과정에서 자차를 소유 및 유지하고 있습니다.\n 직접 장부를 정리하고 재고를 관리하며 숫자를 정확하게 다루는 법을 익혔습니다. 최대한 엑셀 수식을 활용하여 업무량을 줄여 효율화 시켰습니다. 또한, 사업 운영의 전반적인 과정을 경험하며 자영업의 자금 흐름과 경영 방식에 대한 이해를 넓혔습니다. 직접 판매 추이와 부동산 입지에 따른 주요 방문객들의 유형을 사전에 확인하고 부동산학 수업에서 배웠던 방식을 직접 도입하여 월세를 최대한 낮추고 가까운 영업장과 협의를 통해 거의 무인화 시켜 구매력이 크지 않은 시골 지역의 노년층에 맞춘 박리다매 형식의 전략을 도입해 적은 돈이지만 자차를 유지할 수 있을 정도의 안정적인 수익을 창출하는데 성공했습니다.\n 이러한 경험을 통해 임대차 및 자산관리 업무와 관련된 경험을 쌓고 추진력등 성격적 소양을 증진시킬 수 있었습니다."},{"image":"/uploads/project-3-1765086988008.png","video":"","title":"공원 조경 공모전","description":"1학년 학부생 당시 조경 공모전에 도전을 했었습니다. 비록 전공지식의 부족으로 입상에는 실패하였지만 다른 학교 다른 과 학생들과 협업하여 공모전을 진행하는 과정 자체가 뜻 깊었습니다. 또한, 이 프로젝트를 진행하며 Auto CAD와 같은 툴 사용법에 대하여 관심을 가지고 조금씩 배우는 계기가 되었습니다. 마지막으로, 현재 녹색 개발이 중요해지면서 조경의 중요성이  커져가고 있는 가운데 해당 프로젝트를 진행하며 조경 산업에서 일하는 사람들과 인맥을 만들고 조경 산업에 대하여 지속적으로 배울 수 있는 좋은 계기가 되었습니다. "},{"image":"/uploads/project-4-1765087162482.png","video":"","title":"지역 대학생 위원장 활동 경험","description":" 대학생 위원회 위원장을 맡아 조직을 구성하고 운영하는 경험을 통해 리더십과 협력 능력과 분석력을 길렀습니다. 제가 거주하는 지역구에 아예 조직이 존재하지 않아 처음부터 지인들을 모으고 당적 부를 찾아 설득 과정을 통해 업무를 진행하였습니다. 아예 체계가 없었던 지라 당협의 요구사항을 반영해 처음부터 조직을 구성했었습니다. 대학생보다 고령자가 많은 특성상 중간 다리 역할이 되어 이질적인 두 집단이 일을 할 수 있도록 소통 능력을 길렀습니다. 각 집단에서 기본적인 공감대를 형성하여 서로 다른 두 집단과 어울리러 일할 수 있었습니다. 두 집단의 방식 차이에서 여러 갈등이 있었습니다. 여기서, 제가 위원장으로서 다른 위원들보다 먼저 조금 더 일을 해 자발적으로 일정 수준의 양보를 할 수 있도록 대학생 위원들을 유도하였고, 기존 당협 분들과 더 일을 진행하여 인간관계를 구축하고 자주 대화를 나누어 일하는 방식의 차이를 설명하그 대안까지 제시하여 상이한 두 집단이 일할 수 있도록 도왔었습니다.\n"},{"image":"/uploads/project-1765086508582-1765086508683.png","video":"","title":"이전 경험을 활용한 리서치 프로젝트","description":"비록 여러가지 회의감이나 번아웃으로 인해 위원장 및 관련 활동에 더 이상 관여하지는 않았으나 가장 중요한 인간관계 유지능력을 기를 수 있었습니다. 비록 자주 만날 일은 없더라도 주기적으로 연락을 주고 받으며 해당 경험을 통해 나이대, 성향, 생각, 심지어는 정치성향이 다른 사람들과도 인간관계를 유지할 수 있는 능력을 기를 수 있었습니다. 이를 통해 대학교 개발사업 리서치 및 발표 과제에서 이러한 인간관계를 바탕으로 인터뷰 자리를 마련하는 등의 결실을 만들었습니다. \n더욱이 이러한 일련의 과정을 통해 현재 하고 있는 일이 손해를 보는 일이라고 하더라도 장기적으로 언젠가 도움이 될 수 있다는 점을 알게 되어 시키는 일에 좀 더 충실히 일할 수 있는 인격적인 성장을 이룰 수 있었습니다."},{"image":"/uploads/project-1765088697704-1765088698110.png","video":"","title":"킥보드 불법 주차 발생 원인 프로젝트 ","description":"킥보드 불법 주차로 인한 견인 데이터 위치 정보 및 유형을 정리, 대학교, 학원, 정거장의 위치 정보를 가져와 각 요소들의 상관관계에서 킥보드의 불법 주정차 발생 위치를 파악하고자 함"},{"image":"/uploads/project-1765089214849-1765089216076.png","video":"","title":"드론 활용한 프로젝트","description":"도시재생, 교통계획 프로젝트에서 넓은 지역을 드론을 통해 빠르고 효율적으로 분석하여 프로젝트 진행함"},{"image":"/uploads/project-1765089302356-1765089302454.png","video":"","title":"신탁 원부 분석","description":"울산광역시 신탁사업 원부를 출력해 권리 관계등을 분석함"},{"image":"/uploads/project-1765089431459-1765089431819.png","video":"","title":"경매물건 프로젝트","description":"경매물건 분석하고 이를 활용하여 수익화 후 매도전략 만듦"},{"image":"/uploads/project-1765089921126-1765089922215.png","video":"","title":"마이크로모빌리티를 활용한 스마트 시티 정책 제안 프로젝트","description":"판교 교통난 해결을 위한 방법으로 마이크로 모빌리티를 활용한 새로운 정책 제안 및 그 가능성을 공공데이터로 증명"},{"image":"/uploads/project-1765090349217-1765090350322.png","video":"","title":"호텔 부동산시장 분석 프로젝트","description":"기존 연구 발표자료를 기반으로 공공데이터를 활용한 리서치 및 대안 제시"}] as Array<{ image: string; video?: string; title: string; description: string }>
  }

  const [projectsInfo, setProjectsInfo] = useState(defaultInfo)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageAspects, setImageAspects] = useState<{ [key: string]: string }>({})
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [displayCount, setDisplayCount] = useState(defaultInfo.initialDisplay)
  const [showDisplaySettings, setShowDisplaySettings] = useState(false)
  const [newProject, setNewProject] = useState({
    image: "",
    title: "",
    description: ""
  })
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  
  // localStorage에서 데이터 로드 - 편집 모드가 변경될 때마다 실행
  useEffect(() => {
    const savedData = getData('projects-info') as typeof defaultInfo | null
    if (savedData) {
      const mergedData = { ...defaultInfo, ...savedData }
      setProjectsInfo(mergedData)
      setDisplayCount(mergedData.initialDisplay || defaultInfo.initialDisplay)
      // background 데이터가 있으면 설정
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    
    const savedBg = getData('projects-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode]) // isEditMode가 변경될 때마다 데이터 다시 로드
  
  const updateProjectsInfo = async (key: string, value: string | number | boolean | typeof projectsInfo.projects) => {
    const newInfo = { ...projectsInfo, [key]: value }
    setProjectsInfo(newInfo)
    saveData('projects-info', newInfo)
    // 파일에도 자동 저장
    await saveToFile('projects', 'Info', newInfo)
  }
  
  const updateProject = async (index: number, field: string, value: string) => {
    const newProjects = [...projectsInfo.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    await updateProjectsInfo('projects', newProjects)
  }
  
  
  const removeProject = async (index: number) => {
    // 삭제할 프로젝트의 이미지/비디오 파일 경로 가져오기
    const projectToRemove = projectsInfo.projects[index]
    
    // 이미지가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.image && projectToRemove.image.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.image })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 이미지 삭제 완료: ${projectToRemove.image}`)
        }
      } catch (error) {
        console.error('프로젝트 이미지 삭제 실패:', error)
      }
    }
    
    // 비디오가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.video && projectToRemove.video.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.video })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 비디오 삭제 완료: ${projectToRemove.video}`)
        }
      } catch (error) {
        console.error('프로젝트 비디오 삭제 실패:', error)
      }
    }
    
    // 프로젝트 목록에서 제거
    const newProjects = projectsInfo.projects.filter((_, i) => i !== index)
    await updateProjectsInfo('projects', newProjects)
  }
  
  // 표시할 프로젝트들
  const validProjects = projectsInfo.projects
  const visibleProjects = isEditMode ? validProjects : validProjects.slice(0, displayCount)
  const hasMoreProjects = validProjects.length > displayCount
  
  // 더보기 버튼 클릭
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + projectsInfo.loadMoreCount, validProjects.length))
  }
  
  // 이미지 비율 감지 함수
  const detectImageAspect = (src: string) => {
    if (!src) return // 빈 이미지 경로는 무시
    
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / img.height
      let aspectClass: string
      
      // 일반적인 이미지 비율들 감지
      if (ratio >= 1.7 && ratio <= 1.8) {
        aspectClass = 'aspect-video' // 16:9 (1.777...)
      } else if (ratio >= 1.3 && ratio <= 1.35) {
        aspectClass = 'aspect-[4/3]' // 4:3 (1.333...)
      } else if (ratio >= 0.95 && ratio <= 1.05) {
        aspectClass = 'aspect-square' // 1:1 (1.0)
      } else if (ratio >= 0.74 && ratio <= 0.76) {
        aspectClass = 'aspect-[3/4]' // 3:4 (0.75)
      } else if (ratio >= 0.55 && ratio <= 0.57) {
        aspectClass = 'aspect-[9/16]' // 9:16 (0.5625)
      } else if (ratio >= 1.4 && ratio <= 1.45) {
        aspectClass = 'aspect-[3/2]' // 3:2 (1.5)
      } else if (ratio >= 0.65 && ratio <= 0.67) {
        aspectClass = 'aspect-[2/3]' // 2:3 (0.666...)
      } else if (ratio > 1.8) {
        aspectClass = 'aspect-[21/9]' // 초광각
      } else if (ratio < 0.55) {
        aspectClass = 'aspect-[1/2]' // 매우 세로
      } else {
        // 기타 비율은 가장 가까운 것으로
        if (ratio > 1) {
          aspectClass = 'aspect-video' // 기본 가로
        } else {
          aspectClass = 'aspect-[3/4]' // 기본 세로
        }
      }
      
      setImageAspects(prev => ({ ...prev, [src]: aspectClass }))
    }
    img.src = src
  }
  
  // 모든 이미지 비율 감지
  useEffect(() => {
    validProjects.forEach(project => {
      detectImageAspect(project.image)
    })
  }, [validProjects.length]) // 유효한 projects 개수가 변경되면 다시 실행

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <EditableBackground
        image={backgroundData.image}
        video={backgroundData.video}
        color={backgroundData.color}
        opacity={backgroundData.opacity}
        onChange={(data) => {
          const newData = { ...backgroundData, ...data }
          setBackgroundData(newData)
          saveData('projects-background', newData)
          
          // projectsInfo도 업데이트 (파일 저장을 위해)
          const updatedProjectsInfo = { ...projectsInfo, background: newData }
          setProjectsInfo(updatedProjectsInfo)
          saveData('projects-info', updatedProjectsInfo)
        }}
        storageKey="projects-background"
        className="relative"
      >
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 제목 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={projectsInfo.title}
                onChange={(value) => updateProjectsInfo('title', value)}
                storageKey="projects-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <EditableText
                value={projectsInfo.subtitle}
                onChange={(value) => updateProjectsInfo('subtitle', value)}
                storageKey="projects-subtitle"
              />
            </p>
          </div>

          {/* 프로젝트가 없을 때 */}
          {validProjects.length === 0 && !isEditMode ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🚀</span>
              <p className="text-xl text-muted-foreground">준비 중입니다</p>
            </div>
          ) : (
            /* 프로젝트 그리드 */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => {
                
                return (
                  <div 
                    key={index}
                    className="group flex flex-col relative cursor-pointer"
                    onClick={() => !isEditMode && setSelectedImage(project.video || project.image)}
                  >
                    {isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeProject(index)
                        }}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    
                    {/* 이미지/비디오 영역 */}
                    <div className="relative aspect-[4/3] rounded-lg bg-muted mb-3 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <EditableMedia
                          src={project.image || ""}
                          onChange={(src) => updateProject(index, 'image', src)}
                          type="auto"
                          storageKey={`project-${index}-image`}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                          purpose={`project-${index}`}
                        />
                      )}
                    </div>
                    
                    {/* 텍스트 영역 */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground mb-1">
                        <EditableText
                          value={project.title || "프로젝트 제목"}
                          onChange={(value) => updateProject(index, 'title', value)}
                          storageKey={`project-${index}-title`}
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <EditableText
                          value={project.description || "프로젝트 설명"}
                          onChange={(value) => updateProject(index, 'description', value)}
                          storageKey={`project-${index}-description`}
                          multiline
                        />
                      </p>
                    </div>
                  </div>
                )
              })}
              
              {/* 편집 버튼 */}
              {isEditMode && (
                <div 
                  className="h-64 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => setShowProjectModal(true)}
                >
                  <div className="text-center">
                    <Plus className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">프로젝트 추가</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 더보기 버튼 */}
          {hasMoreProjects && !isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                <ChevronDown className="h-5 w-5" />
                더 많은 프로젝트 보기 ({validProjects.length - displayCount}개 더)
              </button>
            </div>
          )}
          
          {/* 표시 설정 버튼 (편집 모드에서만) */}
          {isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowDisplaySettings(true)}
                className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <LayoutGrid className="h-5 w-5" />
                더보기 설정
              </button>
            </div>
          )}
          </div>
        </section>
      </EditableBackground>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 모달 컨테이너 */}
          <div 
            className="relative bg-background rounded-lg shadow-2xl max-w-4xl max-h-[85vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 확대된 이미지/비디오 */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {selectedImage && (selectedImage.includes('.mp4') || selectedImage.includes('.webm') || selectedImage.includes('youtube')) ? (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="확대된 프로젝트 이미지"
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-muted-foreground text-center py-20'
                      placeholder.innerHTML = '<span class="text-6xl">📁</span><p class="mt-4">미디어를 불러올 수 없습니다</p>'
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 프로젝트 추가 모달 */}
      {showProjectModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">새 프로젝트 추가</h3>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* 이미지/비디오 업로드 */}
              <div>
                <label className="text-sm font-medium mb-2 block">프로젝트 이미지/비디오</label>
                <div className="h-48 rounded-lg overflow-hidden bg-muted">
                  {newProject.image ? (
                    <div className="relative h-full">
                      {newProject.image.includes('.mp4') || newProject.image.includes('.webm') ? (
                        <video 
                          src={newProject.image} 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                      ) : (
                        <img 
                          src={newProject.image} 
                          alt="프로젝트 미리보기"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => setNewProject({...newProject, image: ""})}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <input
                        id="project-upload"
                        type="file"
                        accept="image/*,video/mp4,video/webm"
                        onChange={async (e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          
                          const isVideo = file.type.includes('video')
                          const maxSize = isVideo ? 20 * 1024 * 1024 : 5 * 1024 * 1024
                          
                          if (file.size > maxSize) {
                            alert(`파일 크기는 ${isVideo ? '20MB' : '5MB'} 이하여야 합니다`)
                            return
                          }
                          
                          const formData = new FormData()
                          formData.append('file', file)
                          formData.append('purpose', `project-${Date.now()}`)
                          
                          try {
                            const response = await fetch(isVideo ? '/api/upload-video' : '/api/upload-image', {
                              method: 'POST',
                              body: formData
                            })
                            
                            const result = await response.json()
                            
                            if (result.success) {
                              setNewProject({...newProject, image: result.path})
                            } else {
                              alert(`❌ ${result.error}`)
                            }
                          } catch {
                            alert('업로드 중 오류가 발생했습니다')
                          }
                        }}
                        className="hidden"
                      />
                      <label
                        htmlFor="project-upload"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 cursor-pointer"
                      >
                        <Upload className="h-4 w-4 inline mr-2" />
                        파일 업로드
                      </label>
                      <input
                        type="text"
                        value={newProject.image}
                        onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                        placeholder="또는 URL 입력 (https://...)"
                        className="px-3 py-2 border rounded-lg bg-background text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* 프로젝트 제목 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 제목</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="예: 브랜드 리뉴얼 프로젝트"
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
              
              {/* 프로젝트 설명 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 설명</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  placeholder="예: 스타트업 A사의 전체 브랜딩 리뉴얼 및 UI/UX 개선"
                  className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button
                onClick={async () => {
                  if (newProject.title && newProject.description) {
                    // 비디오 URL 체크 및 처리
                    const isVideo = newProject.image && (newProject.image.includes('.mp4') || newProject.image.includes('.webm'))
                    const projectData = {
                      image: isVideo ? '' : newProject.image,
                      video: isVideo ? newProject.image : '',
                      title: newProject.title,
                      description: newProject.description
                    }
                    const updatedProjects = [...projectsInfo.projects, projectData]
                    const updatedInfo = {...projectsInfo, projects: updatedProjects}
                    setProjectsInfo(updatedInfo)
                    saveData('projects-info', updatedInfo)
                    
                    // 파일에도 저장
                    const success = await saveToFile('projects', 'Info', updatedInfo)
                    if (success) {
                      alert('✅ 프로젝트가 추가되고 파일에 저장되었습니다!')
                    }
                    
                    setNewProject({ image: "", title: "", description: "" })
                    setShowProjectModal(false)
                  } else {
                    alert('제목과 설명을 입력해주세요')
                  }
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                추가
              </button>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 표시 설정 모달 */}
      {showDisplaySettings && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">더보기 설정</h3>
              <button
                onClick={() => setShowDisplaySettings(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 초기 표시 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  처음에 보여줄 프로젝트 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => {
                        updateProjectsInfo('initialDisplay', num)
                        setDisplayCount(Math.min(displayCount, num))
                      }}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.initialDisplay === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.initialDisplay}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('initialDisplay', value)
                      setDisplayCount(Math.min(displayCount, value))
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 더보기 클릭 시 추가 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  더보기 클릭 시 추가로 보여줄 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => updateProjectsInfo('loadMoreCount', num)}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.loadMoreCount === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.loadMoreCount}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('loadMoreCount', value)
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 현재 상태 미리보기 */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-2">현재 설정:</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• 전체 프로젝트: {validProjects.length}개</p>
                  <p>• 처음 표시: {projectsInfo.initialDisplay}개</p>
                  <p>• 더보기 클릭당: {projectsInfo.loadMoreCount}개씩 추가</p>
                  {validProjects.length > projectsInfo.initialDisplay && (
                    <p className="text-primary mt-2">
                      → 더보기 버튼 {Math.ceil((validProjects.length - projectsInfo.initialDisplay) / projectsInfo.loadMoreCount)}번 클릭 필요
                    </p>
                  )}
                </div>
              </div>
              
              {/* 팁 */}
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-xs font-medium mb-1">💡 추천 설정:</p>
                <p className="text-xs text-muted-foreground">
                  • 프로젝트가 많은 경우: 6개 표시, 3개씩 추가<br/>
                  • 프로젝트가 적은 경우: 3개 표시, 3개씩 추가<br/>
                  • 모바일 고려: 3의 배수로 설정 권장
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  // 초기화
                  updateProjectsInfo('initialDisplay', 6)
                  updateProjectsInfo('loadMoreCount', 3)
                  setDisplayCount(6)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                기본값으로 초기화
              </button>
              <button
                onClick={async () => {
                  // 파일에 저장
                  const success = await saveToFile('projects', 'Info', projectsInfo)
                  if (success) {
                    alert('✅ 프로젝트 설정이 파일에 저장되었습니다!')
                  }
                  setShowDisplaySettings(false)
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                📁 저장 & 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}