import React, { useState } from "react";
import {
  Header,
  HeaderBottom,
  HeaderBottomItem,
  HeaderTop,
  HeaderTopButton,
  HeaderTopButtons,
  Main,
  MainFirst,
  MainFirstItem,
  MainSecond,
  MainThird,
  HeaderBottomItemFirstImg,
  HeaderBottomItemFirst,
  HeaderBottomItemFirstText,
  HeaderBottomItemSecond,
  HeaderBottomItemSecondImg,
  HeaderBottomItemSecondText,
  HeaderBottomItemSecondBox,
  HeaderBottomItemSecondBest,
  BestLists,
  BestList,
  IconLists,
  IconList,
  IconImg,
  BoxGridContainer,
  GridItem,
  MainSecondItem,
  MainThirdItem,
  MainFourthItem,
  MainSecondBox,
  SideBar,
  SideList,
  MainThirdBody,
  BodyTitle,
  BodyItemBox,
} from "./styledLists";
import DownIcon from "./img/downIcon.svg";
import SearchIcon from "./img/searchIcon.svg";
import HeartIcon from "./img/heartIcon.svg";
import PersonIcon from "./img/personIcon.svg";
import ShippingIcon from "./img/shippingIcon.svg";
import CartIcon from "./img/cartIcon.svg";
import RightIcon from "./img/rightIcon.svg";
import InfoIcon from "./img/infoIcon.svg";
import CloseIcon from "./img/closeIcon.svg";
import GplogoIcon from "./img/gp_logoIcon.svg";
import GpGoodsIcon from "./img/gp_goodsIcon.svg";
import GradeImage from "./img/grade_img_from_ssg.png";

function Practice() {
  const [bestOpen, setBestOpen] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const [cartCount, setCartCount] = useState<number>(0);
  console.log(bestOpen);
  const bestShow = () => {
    setBestOpen(true);
  };

  const bestClose = () => {
    setBestOpen(false);
  };

  return (
    <React.Fragment>
      <Header>
        <HeaderTop>
          <HeaderTopButtons>
            <HeaderTopButton color="#966e46" weight={700} size={12}>
              지금 신규가입시 1개월 무료!
            </HeaderTopButton>
            <HeaderTopButton className="header_username">
              박세준 님
            </HeaderTopButton>
            <HeaderTopButton className="header_logout">
              로그아웃
            </HeaderTopButton>
            <HeaderTopButton className="header_help">고객센터</HeaderTopButton>
          </HeaderTopButtons>
        </HeaderTop>
        <HeaderBottom>
          <HeaderBottomItem>
            <HeaderBottomItemFirst>
              <HeaderBottomItemFirstText>GOD.COM</HeaderBottomItemFirstText>
              <HeaderBottomItemFirstImg src={DownIcon} alt="headerIconDown" />
            </HeaderBottomItemFirst>
          </HeaderBottomItem>
          <HeaderBottomItem>
            <HeaderBottomItemSecond>
              <HeaderBottomItemSecondBox>
                <HeaderBottomItemSecondText />
                <IconImg src={SearchIcon} alt="headerIconSearch" size={20} />
              </HeaderBottomItemSecondBox>
            </HeaderBottomItemSecond>
            <HeaderBottomItemSecondBest>
              <div>
                <HeaderBottomItemSecondBest onMouseOver={bestShow}>
                  1. 갓피플다이어리
                </HeaderBottomItemSecondBest>
                {bestOpen === true && (
                  <BestLists onMouseLeave={bestClose}>
                    <BestList>1</BestList>
                    <BestList>2</BestList>
                    <BestList>3</BestList>
                    <BestList>4</BestList>
                  </BestLists>
                )}
              </div>
            </HeaderBottomItemSecondBest>
          </HeaderBottomItem>
          <HeaderBottomItem cartCount={cartCount}>
            <IconLists>
              <IconList>
                <IconImg src={HeartIcon} alt="heartIcon" size={24} />
              </IconList>
              <IconList>
                <IconImg src={PersonIcon} alt="personIcon" size={24} />
              </IconList>
              <IconList>
                <IconImg src={ShippingIcon} alt="shippingIcon" size={24} />
              </IconList>
              <IconList className="header_bt_cart">
                <IconImg src={CartIcon} alt="cartIcon" size={24} />
              </IconList>
            </IconLists>
          </HeaderBottomItem>
        </HeaderBottom>
      </Header>
      <Main>
        <MainFirst>
          <MainFirstItem>
            <BoxGridContainer>
              <GridItem size={25}>
                <IconImg src={GradeImage} alt="gradeImg" size={48}></IconImg>
              </GridItem>
              <GridItem size={75} fontSize={20}>
                <strong>박세준님</strong>의 MyGOD
                <div className="secondLine">
                  Friends 등급혜택 보기
                  <IconImg
                    src={RightIcon}
                    alt="rightIcon"
                    size={13}
                    className="secondLineIcon"
                  ></IconImg>
                </div>
              </GridItem>
            </BoxGridContainer>
          </MainFirstItem>
          <MainSecondItem>
            <div className="coupon_stat">
              <div className="coupon_title">쿠폰</div>
              <div className="coupon_count">
                <span className="coupon_value_num">0</span>
                <span className="coupon_value_text">장</span>
              </div>
            </div>
            <div className="coupon_detail">
              <div className="coupon_possible">
                <span>다운로드 가능한 등급쿠폰</span>
                <span>0장</span>
              </div>
              <div className="coupon_possible">
                <span>7일이내 만료예정 쿠폰</span>
                <span>0장</span>
              </div>
            </div>
          </MainSecondItem>
          <MainThirdItem>
            <div className="money_stat">
              <div className="money_title">
                GOD MONEY
                <IconImg src={InfoIcon} alt="infoIcon" size={13}></IconImg>
              </div>
              <div className="money_count">
                <span className="money_value_num">87</span>
                <span className="money_value_text">원</span>
              </div>
            </div>
            <div className="money_detail">
              <div className="money_deposit">
                <span>계좌</span>
                <span>등록하기</span>
              </div>
              <div className="money_deposit">
                <span>카드</span>
                <span>GOD.COM&nbsp;카드</span>
              </div>
            </div>
            <div className="money_button">
              <div className="money_button_item">
                <button type="button" className="money_button_item_one">
                  충전하기
                </button>
              </div>
              <div className="money_button_item">
                <button type="button" className="money_button_item_two">
                  전환하기
                </button>
                {showTooltip === true && (
                  <span className="money_button_item_two_tooltip">
                    캐시를 GOD MONEY로 쓱 전환해보세요!
                    <IconImg
                      src={CloseIcon}
                      alt="closeIcon"
                      size={10}
                      onClick={() => setShowTooltip(false)}
                    />
                  </span>
                )}
              </div>
            </div>
          </MainThirdItem>
          <MainFourthItem>
            <div className="point_stat">
              <div className="point_title">갓피플 포인트</div>
              <div className="point_count">
                <span className="point_value_num">40</span>
                <span className="point_value_text">p</span>
              </div>
            </div>
            <div className="point_detail">
              적립하신 포인트는
              <br />
              다음날 적립 반영됩니다.
            </div>
          </MainFourthItem>
        </MainFirst>

        <MainSecond>
          <MainSecondBox size={55}>
            <div className="banner_text">
              <IconImg src={GplogoIcon} alt="gplogo" size={30} />
              <span>갓피플 클럽에 가입하면</span>
            </div>
            <div className="banner_sub_text">
              도서 1만원이상, 용품 2만원이상 구매시 배송비 무료
            </div>
          </MainSecondBox>
          <MainSecondBox size={23}>
            <IconImg src={GpGoodsIcon} alt="gpgoods" size={150} />
          </MainSecondBox>
          <MainSecondBox size={22}>
            <div className="banner_end_btn">지금 가입하시면 1개월 무료</div>
          </MainSecondBox>
        </MainSecond>

        <MainThird>
          <div className="third_side">
            <SideBar className="side_first side_divider">
              <SideList className="side_first_title">나의 주문관리</SideList>
              <SideList className="side_first_val">주문/배송내역</SideList>
              <SideList className="side_first_val">구매 내역</SideList>
              <SideList className="side_first_val">자주구매 상품</SideList>
            </SideBar>
            <SideBar className="side_second side_divider">
              <SideList className="side_second_title">나의 혜택관리</SideList>
              <SideList className="side_second_val">쿠폰</SideList>
              <SideList className="side_second_val">GOD MONEY</SideList>
              <SideList className="side_second_val">갓피플 포인트</SideList>
              <SideList className="side_second_val">맞춤혜택 관리</SideList>
            </SideBar>
          </div>
          <MainThirdBody className="third_body">
            <div className="order_body">
              <BodyTitle className="order_title" borderBottom={false}>
                <span>주문/배송 조회</span>
                <span className="title_showall">전체보기 &gt;</span>
              </BodyTitle>
              <div className="order_stat">
                <ul className="order_table">
                  <li className="order_stat_list">
                    <span>주문접수</span>
                    <span className="list_val">0</span>
                  </li>
                  <li className="order_stat_list">
                    <span>결제완료</span>
                    <span className="list_val">0</span>
                  </li>
                  <li className="order_stat_list">
                    <span>상품준비중</span>
                    <span className="list_val">0</span>
                  </li>
                  <li className="order_stat_list">
                    <span>배송중</span>
                    <span className="list_val">0</span>
                  </li>
                  <li className="order_stat_list">
                    <span>배송완료</span>
                    <span className="list_val">0</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="refund_stat">
              <ul className="refund_table">
                <li className="refund_list">
                  <span>취소</span>
                  <span className="list_val">0</span>
                </li>
                <li className="refund_list">
                  <span>교환</span>
                  <span className="list_val">0</span>
                </li>
                <li className="refund_list">
                  <span>반품</span>
                  <span className="list_val">0</span>
                </li>
                <li className="refund_list">
                  <span>구매확정</span>
                  <span className="list_val">0</span>
                </li>
              </ul>
            </div>

            <BodyItemBox>
              <BodyTitle marginTop={50} marginBottom={15} borderBottom={true}>
                <span>마이리뷰</span>
                <span className="title_showall">전체보기&gt;</span>
              </BodyTitle>
              <div className="body_item_notice">
                남겨주신 리뷰는 다른 고객에게 큰 도움이 됩니다. 리뷰 작성시,
                한달 사용리뷰는 300원, 일반 리뷰는 50원의 GP포인트가 적립됩니다.
              </div>
              <div className="body_item_list">
                <ul>
                  <li>사진</li>
                  <li>사진</li>
                  <li>사진</li>
                  <li>사진</li>
                </ul>
              </div>
            </BodyItemBox>

            <div>
              <BodyTitle marginTop={30} marginBottom={15} borderBottom={true}>
                <span>좋아요</span>
                <span className="title_showall">전체보기&gt;</span>
              </BodyTitle>
              <div>
                남겨주신 리뷰는 다른 고객에게 큰 도움이 됩니다. 리뷰 작성시,
                한달 사용리뷰는 300원, 일반 리뷰는 50원의 GP포인트가 적립됩니다.
              </div>
              <div>
                <ul>
                  <li>사진</li>
                  <li>사진</li>
                  <li>사진</li>
                  <li>사진</li>
                </ul>
              </div>
            </div>
          </MainThirdBody>
        </MainThird>
      </Main>
      <footer></footer>
    </React.Fragment>
  );
}

export default Practice;
